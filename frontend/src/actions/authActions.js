import {LOGIN_SUCCESS,CLEAR_ERRORS,REGISTER_SUCCESS, LOGOUT_SUCCESS} from '../constants/productConstant'
import axios from 'axios'

export const login = (email,password) => async(dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.post(
        `http://localhost:1236/amazon/user/login`,
        {email,password},
        config
    )
    dispatch({type:LOGIN_SUCCESS, payload:data.user})
}


export const register = (email,password) => async(dispatch) => {
    const config = {headers: {'Content-Type': 'application/json'}};
    const {data} = await axios.post(
        `http://localhost:1236/amazon/user/register`,
        {email,password},
        config
    )
    dispatch({type:REGISTER_SUCCESS,payload:data.user})
}

export const logout = () => async(dispatch) => {
    const link = 'http://localhost:1236/amazon/user/logout'
    const {data} = await axios.get(link)
    dispatch({type:LOGOUT_SUCCESS,payload:data})
}



export const clearErrors = () => async(dispatch) =>{
    dispatch({type:CLEAR_ERRORS})
}