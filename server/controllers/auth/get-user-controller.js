import getNotification from "../../helper/notifications/getNotification.js";

export default async function getUserController(req, res) 
{
    try
    {
        const { user } = req;
        const notifications = await getNotification(user._id) 
        return res.json({ 
            user: { email: user.email, username: user.username, nickname: user.nickname, verified: user.verified, level: user.level}, 
            notifications: notifications
        })
    }
    catch(e)
    {
        res.status(400).send(e.data)
    }
}
