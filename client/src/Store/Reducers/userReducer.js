const defaultState = {
    username: "",
    email: "",
    nickname: "",
    authored: undefined,
    verified: undefined,
    level: undefined
}

const addUser = "addUser"
const logout = "logout"

export default function userReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case addUser: 
            if(action.payload.user === null)
                return{...defaultState, authored: false}
            return {...state, ...action.payload.user, authored: true}
        case logout: 
            return {...defaultState, authored: false}
        default:
            return state
    }
} 

export const addUserAction = user => ({ type: addUser, payload: {user} })
export const logoutAction = () => ({ type: logout, payload: "" })