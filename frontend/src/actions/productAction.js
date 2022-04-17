import {ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_REQUEST,CLEAR_ERRORS} from  '../constants/productConstant'
import axios from 'axios'

export const getProducts = () => async(dispatch) => {
        dispatch({type:ALL_PRODUCTS_REQUEST})
        let link = 'http://localhost:1236/amazon/products';
        const {data} = await axios.get(link)
        dispatch({type:ALL_PRODUCTS_SUCCESS, payload:data.products})
}

export const clearErrors = () => async(dispatch) =>{
    dispatch({type:CLEAR_ERRORS})
}
