import axios from 'axios'
import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REMOVE_FAIL, PRODUCT_REMOVE_REQUEST, PRODUCT_REMOVE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS } from "../constants/productConstants"
export const listProducts = (page) => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/products?page=${page}`)
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId })
    try {
        const { data } = await axios.get(`/api/products/${productId}`)
        console.log(data)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createdProduct = (product) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_CREATE_REQUEST, payload: product })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.post('/api/products', product, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const deletedProduct = (productId) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_REMOVE_REQUEST, payload: productId })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.delete(`/api/products/` + productId, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: PRODUCT_REMOVE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: PRODUCT_REMOVE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updatedProduct = (product) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.put(`/api/products/` + product._id, product, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
