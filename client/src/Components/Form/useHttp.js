import axios from "axios"
import { addUserAction } from "../../Store/Reducers/userReducer.js";
import { addNotificationAction } from "../../Store/Reducers/notificationReducer.js";

export const registration = ({ form, setError, setLoading, setMessage, navigate }) => 
{
    return async dispatch => 
    {
        try
        {
            const res = await axios.post("/api/account/registration", {...form});
            if(res.status === 200)
            {
                setError(null)
                setLoading(false)
                setMessage(res.data.msg)
                dispatch(addUserAction({...res.data.user, authored: true}))
                dispatch(addNotificationAction(res.data.notifications))
                localStorage.setItem("token", res.data.token)
                navigate("/")
            }
        }
        catch(e)
        {
            console.log(e);
            setError(e.response?.data)
            setLoading(false)
        }
    }
}

export const login = ({ form, setError, setLoading, setMessage, navigate }) => 
{
    return async dispatch => 
    {
        try
        {
            const res = await axios.post("/api/account/log-in", {...form});
            if(res.status === 200)
            {
                setError(null)
                setLoading(false)
                setMessage(res.data.msg)
                dispatch(addUserAction({...res.data.user, authored: true}))
                dispatch(addNotificationAction(res.data.notifications))
                localStorage.setItem("token", res.data.token)
                navigate("/")
            }
        }
        catch(e)
        {
            console.log(e);
            setError(e.response?.data)
            setLoading(false)
        }
    }
}

export const sendVerificationEmail = async (setMessage, email, setError, setLoading) => 
{
    try
    {
        const res = await axios.post("/api/account/send-mail", {email});
        if(res.status === 200)
        {
            setMessage(res.data.msg)
            setLoading(false)
        }
    }
    catch(e)
    {
        console.log(e);
        setError(e.response?.data?.msg)
        setLoading(false)
    }
}