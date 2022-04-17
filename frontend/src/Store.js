import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { product_reducer } from './reducers/productReducer' 
import {auth_reducer} from './reducers/authReducer'
import {basket_reducer} from './reducers/basketReducer'

const initialState = {}

const reducer = combineReducers({
    products:product_reducer,
    auth:auth_reducer,
    basket:basket_reducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store