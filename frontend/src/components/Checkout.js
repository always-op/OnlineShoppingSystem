import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import TotalPrice from './TotalPrice';
import {useSelector} from 'react-redux'

const Checkout = () => {

    const {basket} = useSelector((state) => state.basket)

  return (
    <div>
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout ad" />
                <div className='title'>Here is your Shopping Basket  </div>
                {basket.map((product) => (
                <div>
                <CheckoutProduct  title={product.title} price = {product.price} rating={product.rating} image = {product.image} key={product._id}  />
                </div>
              ))}
            </div>
            <div className="checkout_right">
                <TotalPrice />
            </div>
        </div>
    </div>
    );
};

export default Checkout;
