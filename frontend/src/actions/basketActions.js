import {ADD_BASKET, REMOVE_BASKET} from '../constants/productConstant'

export const add_basket = (id,title,price,rating,image) => (dispatch) => {
    const item = {
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image
    }
    dispatch({type:ADD_BASKET,payload:item})
}

export const remove_basket = (id) => (dispatch) => {
    dispatch({type:REMOVE_BASKET,payload:id})
}