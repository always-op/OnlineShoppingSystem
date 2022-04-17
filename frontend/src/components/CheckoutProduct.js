import React from 'react'
import './CheckoutProduct.css'
import {remove_basket} from '../actions/basketActions'
import {useDispatch} from 'react-redux'

const Product = ({id,title,image,price,rating}) => {

    const dispatch = useDispatch()

    const remove_product = () => {
        dispatch(remove_basket(id))
    }

    
    return (
        <div className='product'>
            <img className='image' src={image} alt='image'/>
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
                <button onClick={remove_product}>Remove from basket</button>
            </div>
        </div> 
    )
}

export default Product
