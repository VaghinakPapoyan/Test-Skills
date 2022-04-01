import { applyMiddleware, combineReducers, createStore } from "redux"
import userReducer from "./Reducers/userReducer"
import notificationReducer from "./Reducers/notificationReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    user: userReducer, 
    notifications: notificationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))