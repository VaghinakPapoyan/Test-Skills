import { validationResult } from "express-validator"
import { USER } from "../../models/user-model.js";
import { NOTIFICATIONS } from "../../models/notification-model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"

export default async function registrationController(req, res) 
{
    try
    {
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(401).json({ error: errors.errors[0].msg })
        }

        const { username, nickname, email, password, confirmPassword } = req.body;
        
        if(password !== confirmPassword)
        {
            return res.status(401).json({ error: "Passwords is not similar." })
        }
        let candidate = await USER.findOne({ email })
        if(candidate)
        {
            return res.status(401).json({ error: "This email is already used." })
        }
        candidate = await USER.findOne({ username })
        if(candidate)
        {
            return res.status(401).json({ error: "This username is already used." })
        }

        const hashedPassword = await bcrypt.hash(password, 7)
        const verificationLink = v4();
        const user = await USER.create({ username, nickname, email, password: hashedPassword, verificationLink })
        const notifications = await NOTIFICATIONS.create({ userId: user._id, title: "Verification", text: "Pls verify your account for first", date: Date.now(), href: "/account/verification" })
        const token = jwt.sign({ userId: user._id }, process.env.tokenSecret, { expiresIn: "10d" })

        return res.status(200).json({
            msg: "User created",
            token,
            user: { username, nickname, email, verified: false, level: "low" },
            notifications: notifications
        })
    }
    catch(e)
    {
        res.status(400).send(e.data)
    }
}
