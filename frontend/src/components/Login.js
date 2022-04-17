import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {login, register} from '../actions/authActions'
import {useHistory} from 'react-router-dom'


import './Login.css'
const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [email, setemail] = useState("");
    const [password,setpassword] = useState("");

    const {isAuthenticated} = useSelector((state) => state.auth)

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email,password))
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(register(email,password))
    }

    if(isAuthenticated) {
        history.push('/')
    }

    return (
        <div className="login">
                    <img
        className="login__logo"
        
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
    />
        <div className='login_container'>
            <h1>Sign IN</h1>
            <form>
                <h5>Email</h5>
                <input type="text" placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" placeholder='Password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
                <button className='login_button' onClick={loginSubmit}>Sign In</button>
            </form>
            <p>                    
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='register_button' onClick={registerSubmit} >Create Your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
