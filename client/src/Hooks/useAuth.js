import axios from "axios";
import { addNotificationAction } from "../Store/Reducers/notificationReducer";
import { addUserAction, logoutAction } from "../Store/Reducers/userReducer";

export const getUser = token =>
{
    return async dispatch => 
    {
        try
        {
            const user = await axios.get('/api/account/get-user', { headers: { Authorization: "Bearer " + token } })
            dispatch(addUserAction(user.data.user))
            dispatch(addNotificationAction(user.data.notifications))
        }
        catch(e)
        {
            console.log(e);
            dispatch(addUserAction(null))
            localStorage.removeItem("token")
        }
    }
}
export const logout = dispatch =>
{
    localStorage.removeItem("token")
    dispatch(logoutAction())
}