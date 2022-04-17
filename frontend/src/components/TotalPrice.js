import React from 'react';
import './TotalPrice.css'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const TotalPrice = () => {
  const history = useHistory()
  const {basket} = useSelector((state)=>state.basket)
  const {isAuthenticated} = useSelector((state)=>state.auth)

  let sum = 0

  const total = () => {
    basket.map((product) => {
      sum = sum + product.price
    })
    return sum
  }

  const price = total()
  const redirect = () => {
   if(!isAuthenticated){
      history.push('/login')
    }else if(basket.length < 1){
      history.push('/')
    }
    else {
      history.push('/payment')
    }
  }

  return (
    <div className='totalprice_container'>
        <div className="lineOne">
            Total (2 items) : <strong>${price}</strong> 
        </div>
        <div className="linetwo">
            <input type="checkbox"/>
            This order contains a gift
        </div>
        <button class='btn1' onClick={redirect} >Proceed to Checkout</button>
    </div>
  );
};

export default TotalPrice;
