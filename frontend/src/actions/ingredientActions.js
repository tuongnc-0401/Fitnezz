import axios from 'axios'
import { INGREDIENT_CREATE_FAIL, INGREDIENT_CREATE_REQUEST, INGREDIENT_CREATE_SUCCESS, INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS, INGREDIENT_REMOVE_FAIL, INGREDIENT_REMOVE_REQUEST, INGREDIENT_REMOVE_SUCCESS } from '../constants/ingredientConstants'
export const listIngredients = () => async (dispatch) => {
    dispatch({
        type: INGREDIENT_LIST_REQUEST
    })
    try {
        const { data } = await axios.get('/api/ingredients')
        dispatch({ type: INGREDIENT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: INGREDIENT_LIST_FAIL, payload: error.message })
    }
}

export const deletedIngredient = (ingredientId) => async (dispatch, getState) => {
    dispatch({ type: INGREDIENT_REMOVE_REQUEST, payload: ingredientId })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.delete(`/api/ingredients/` + ingredientId, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: INGREDIENT_REMOVE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: INGREDIENT_REMOVE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createdIngredient = (ingredient) => async (dispatch, getState) => {
    dispatch({ type: INGREDIENT_CREATE_REQUEST, payload: ingredient })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.post('/api/ingredients', ingredient, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: INGREDIENT_CREATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: INGREDIENT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })

    }
}