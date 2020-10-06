import axios from "../apis/apis";
import {SIGN_IN,SIGN_OUT} from "./types";

export const fetchLogin = ()=> async dispatch => {
        const response = await axios.post('/sign-in')

        dispatch({type: "FETCH_LOGIN", payload: response})

    }

export const signIn =(userId) =>{
    return{
        type:SIGN_IN,
        payload :userId
    }
}

export const signOut =() =>{
    return{
        type:SIGN_OUT
    }
}