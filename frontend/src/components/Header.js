import React from 'react'
import './Header.css'
import  { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useSelector} from 'react-redux'

const Header = () => {

    const {isAuthenticated} = useSelector((state) => state.auth)
    const {basket} = useSelector((state)=>state.basket)

    return (
        <div className='header'>
            <Link to='/'>
                <img className='logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            <div className="search">
                <input className='header_search' type="text" />
                <SearchIcon className='search_icon'/>
            </div>
            <div className='panel'>
                
                <div className='option'>
                    <span className='lineone'>
                        {isAuthenticated ? 'Welcome' : 'Hello'}
                    </span>
                    <span className="linetwo">
                        {isAuthenticated ?                        
                          <Link to='/logout'>Logout</Link> : <Link to='/login'>
                         Sign In
                         </Link> }
                        
                    </span>
                </div>

                <div className='option'>
                    <span className='lineone'>
                        Returns
                    </span>
                    <span className="linetwo">
                        & orders
                    </span>
                </div>

                <div className='option'>
                    <span className='lineone'>
                        Your
                    </span>
                    <span className="linetwo">
                        Prime
                    </span>
                </div>

                <div className="basket">
                    <Link to='/checkout'>
                        <ShoppingBasketIcon  />
                    </Link>
                <span className='count linetwo'>{basket.length}</span>
            </div>

            </div>
        </div>
    )
}

export default Header
