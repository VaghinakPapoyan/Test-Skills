import { NOTIFICATIONS } from "../../models/notification-model.js";

export default async function deleteNotification(req, res) 
{
    try
    {
        const { id } = req.body;
        
        await NOTIFICATIONS.deleteOne({ _id: id }) 
        return res.json({ 
            msg: "Notification deleted."
        })
    }
    catch(e)
    {
        res.status(400).send(e.data)
    }
}
