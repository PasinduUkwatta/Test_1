import {combineReducers} from 'redux'
import usersLoginReducer from "./usersLoginReducer";

export default combineReducers({
    usersLogin :usersLoginReducer
})