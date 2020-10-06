import {combineReducers} from 'redux'
import usersLoginReducer from "./usersLoginReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'


export default combineReducers({
    usersLogin :usersLoginReducer,
    auth :authReducer,
    form:formReducer
})



