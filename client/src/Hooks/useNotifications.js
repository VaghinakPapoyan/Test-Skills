import axios from "axios";
import { deleteNotificationsAction } from "../Store/Reducers/notificationReducer";

export const deleteNotification = id =>
{
    return async dispatch => 
    {
        try
        {
            dispatch(deleteNotificationsAction(id))
            axios.post('/api/account/notification/delete', { id })
        }
        catch(e)
        {
            console.log(e);
        }
    }
}