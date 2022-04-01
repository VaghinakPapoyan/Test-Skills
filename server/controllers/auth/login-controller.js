import { validationResult } from "express-validator"
import { USER } from "../../models/user-model.js";
import bcrypt from "bcrypt"
import getNotification from "../../helper/notifications/getNotification.js";
import jwt from "jsonwebtoken"

export default async function loginController(req, res) 
{
    try
    {
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(401).json({ error: errors.errors[0].msg })
        }

        const { username, password } = req.body
        const candidate = await USER.findOne({ $or: [{username}, {email: username}] })
        if(!candidate)
        {
            return res.status(404).json({ error: "Don't find user" })
        }
        if(!bcrypt.compareSync(password, candidate.password))
        {
            return res.status(404).json({ error: "Password is wrong" })
        }

        const token = jwt.sign({ userId: candidate._id }, process.env.tokenSecret, { expiresIn: "10d" })
        const notifications = await getNotification(candidate._id);
        const dto = { username: candidate.username, email: candidate.email, nickname: candidate.nickname, verified: candidate.verified, level: candidate.level }
        return res.status(200).json({ notifications, user: {...dto}, msg: "Nice to meet you.", token })
    }
    catch(e)
    {
        res.status(400).send(e.data)
    }
}
