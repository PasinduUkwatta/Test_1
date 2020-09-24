import axios from "../apis/apis";

export const fetchLogin = ()=> async dispatch => {
        const response = await axios.post('/sign-in')

        dispatch({type: "FETCH_LOGIN", payload: response})

    }


