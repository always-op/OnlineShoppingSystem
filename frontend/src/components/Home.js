import React from 'react'
import './Home.css'
import Product from './Product'
import { useEffect } from 'react'
import {getProducts} from '../actions/productAction'
import {useSelector,useDispatch} from 'react-redux'



const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])

    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Wallpaper" />
            <div className="products_container">
              
              {products.map((product) => (
                <div>
                <Product  title={product.title} price = {product.price} rating={product.rating} image = {product.image} key={product._id}  />
                </div>
              ))}
              
            </div>
            </div>    
        </div>
        
    )
}

export default Home
