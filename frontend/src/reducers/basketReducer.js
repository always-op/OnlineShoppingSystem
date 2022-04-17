import {ADD_BASKET,REMOVE_BASKET} from '../constants/productConstant'

export const basket_reducer = (state = {basket:[]},action) => {
    switch(action.type) {
        
        case ADD_BASKET:
            return {
                ...state,
                basket : [...state.basket,action.payload]
            }

        case REMOVE_BASKET:
            const index = state.basket.findIndex((basket_item) => basket_item.id === action.id)
            let newBasket = [...state.basket]
            if(index >= 0){
                newBasket.splice(index,1)
            }
            else{
                console.warn('cannot remove the product')
            }
            return {
                ...state,
                basket:newBasket
            }

        
        default:
            return state
    }
}