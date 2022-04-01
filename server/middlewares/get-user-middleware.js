import jwt from "jsonwebtoken"
import { USER } from "../models/user-model.js";

export default async function getUserMiddleware(req, res, next)
{
    try
    {
        let token = req.get("Authorization");
        token = token.replace("Bearer ", "");
        const userToken = jwt.verify(token, process.env.tokenSecret)
        const user = await USER.findOne({ _id: userToken.userId})
        req.user = user;
    }
    catch(e)
    {
        return res.status(401).send(e);
    }
    next();
}