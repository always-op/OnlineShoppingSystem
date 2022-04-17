import React from 'react'
import './Product.css'
import {useDispatch,useSelector} from 'react-redux'
import {add_basket} from '../actions/basketActions'

const Product = ({id,title,image,price,rating}) => {

    const dispatch = useDispatch()
    const {basket} = useSelector((state) => state.basket)

    console.log(basket)

    const add_product = () => {
        dispatch(add_basket(id,title,price,rating,image))
    }

    return (
        <div className='product_container'>
            <div className="product_info">
            <p>{title}</p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="rating">
            {Array(rating).fill().map(() => (
                    <p>⭐</p>
                ))}
            </p>
            </div>
            <img src={image} alt="product_image" />
            <button onClick={add_product}>Add to Basket</button>
        </div>
    )
}

export default Product
