const defaultState = {
    notifications: []
}

const addNotification = "addNotification"
const deleteNotifications = "deleteNotifications"

export default function userReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case addNotification:   
            return {...state, notifications: action.payload.notifications.length ? [...action.payload.notifications] : [] }
        case deleteNotifications: 
            return {...state, notifications: [...state.notifications.filter(notification => action.payload.id !== notification._id)]}
        default:
            return state
    }
} 

export const addNotificationAction = notifications => ({ type: addNotification, payload: { notifications } })
export const deleteNotificationsAction = id => ({ type: deleteNotifications, payload: { id } })