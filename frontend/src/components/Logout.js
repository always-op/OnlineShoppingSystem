import React from 'react';
import './Logout.css'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../actions/authActions';

const Logout = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector((state)=>state.auth)

    const logoutSubmit = (e) => {
        e.preventDefault()
        dispatch(logout())
        history.push('/')
    }

    const cancelSubmit = (e) => {
        e.preventDefault()
        history.push('/')
    }

  return (
    <div className='container'>
        <button className='cancel_button' onClick={cancelSubmit} >Cancel</button>
        <button className='logout_button' onClick={logoutSubmit}>Logout</button>
    </div>
  );
};

export default Logout;
