import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { cartIngredientReducer } from './reducers/cartIngredientReducers.js';
import { cartReducer } from './reducers/cartReducers.js';

<<<<<<< HEAD
import { ingredientDetailsReducer, ingredientListReducer, ingredientUpdatedReducer } from './reducers/ingredientReducers.js';

import { ingredientCreatedReducer, ingredientListReducer, ingredientRemovedReducer } from './reducers/ingredientReducers.js';
=======
import { ingredientDetailsReducer, ingredientListReducer, ingredientUpdatedReducer, ingredientRemovedReducer,ingredientCreatedReducer } from './reducers/ingredientReducers.js';
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896

import { orderCreateReducer, orderDetailsReducer, orderMineListReducer } from './reducers/orderReducers.js';
import { productCreatedReducer, productDetailsReducer, productListReducer, productRemovedReducer, productUpdatedReducer } from './reducers/productReducers.js'
import { userDetailsReducer, userRegisterReducer, userSignInReducer, userUpdateProfileReducer } from './reducers/userReducers.js';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
    },
    userSignIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,

    },
    cartIngredient: {
        cartIngredients: localStorage.getItem('cartIngredients') ? JSON.parse(localStorage.getItem('cartIngredients')) : []
    }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    newProduct: productCreatedReducer,
    removeProduct: productRemovedReducer,
    updateProduct: productUpdatedReducer,
    ingredientList: ingredientListReducer,
    cartIngredient: cartIngredientReducer,
<<<<<<< HEAD

    updateIngredient: ingredientUpdatedReducer,
    ingredientDetails: ingredientDetailsReducer,

    removeIngredient: ingredientRemovedReducer,
    newIngredient: ingredientCreatedReducer,



=======
    updateIngredient: ingredientUpdatedReducer,
    ingredientDetails: ingredientDetailsReducer,
    removeIngredient: ingredientRemovedReducer,
    newIngredient: ingredientCreatedReducer,
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
