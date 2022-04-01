import { NOTIFICATIONS } from "../../models/notification-model.js";

export default async function getNotification(userId)
{
    const notifications = await NOTIFICATIONS.find({ userId }) 
    return notifications;
}