import React from 'react'
import './CheckoutProduct.css'

const PaymentProduct = ({id,title,image,price,rating}) => {

    return (
        <div className='product'>
            <img className='image' src={image}/>
            <div className='info'>
                <p className='title'>{title}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
        </div> 
    )
}

export default PaymentProduct
