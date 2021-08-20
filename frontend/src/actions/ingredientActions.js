import axios from 'axios'
<<<<<<< HEAD

import { INGREDIENT_DETAILS_REQUEST, INGREDIENT_DETAILS_SUCCESS, INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS, INGREDIENT_UPDATE_FAIL, INGREDIENT_UPDATE_REQUEST, INGREDIENT_UPDATE_SUCCESS } from '../constants/ingredientConstants'


import { INGREDIENT_CREATE_FAIL, INGREDIENT_CREATE_REQUEST, INGREDIENT_CREATE_SUCCESS, INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS, INGREDIENT_REMOVE_FAIL, INGREDIENT_REMOVE_REQUEST, INGREDIENT_REMOVE_SUCCESS } from '../constants/ingredientConstants'
=======




import { INGREDIENT_UPDATE_FAIL, INGREDIENT_UPDATE_REQUEST, INGREDIENT_UPDATE_SUCCESS, INGREDIENT_DETAILS_FAIL, INGREDIENT_DETAILS_REQUEST, INGREDIENT_DETAILS_SUCCESS,INGREDIENT_CREATE_FAIL, INGREDIENT_CREATE_REQUEST, INGREDIENT_CREATE_SUCCESS, INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS, INGREDIENT_REMOVE_FAIL, INGREDIENT_REMOVE_REQUEST, INGREDIENT_REMOVE_SUCCESS } from '../constants/ingredientConstants'
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896

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


export const updatedIngredients = (ingredient) => async (dispatch, getState) => {
    dispatch({ type: INGREDIENT_UPDATE_REQUEST, payload: ingredient })
    const { userSignIn: { userInfo } } = getState()
    try {

        const { data } = await axios.put(`/api/ingredients/` + ingredient._id, ingredient, {
<<<<<<< HEAD

export const deletedIngredient = (ingredientId) => async (dispatch, getState) => {
    dispatch({ type: INGREDIENT_REMOVE_REQUEST, payload: ingredientId })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.delete(`/api/ingredients/` + ingredientId, {

=======
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
<<<<<<< HEAD

=======
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896
        console.log(ingredient)
        dispatch({ type: INGREDIENT_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: INGREDIENT_UPDATE_FAIL,
<<<<<<< HEAD

        dispatch({ type: INGREDIENT_REMOVE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: INGREDIENT_REMOVE_FAIL,

=======
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

<<<<<<< HEAD

=======
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896
export const detailsIngredient = (ingredientId) => async (dispatch) => {
    dispatch({ type: INGREDIENT_DETAILS_REQUEST, payload: ingredientId })
    try {
        const { data } = await axios.get(`/api/ingredients/${ingredientId}`)
        console.log(data)
        dispatch({ type: INGREDIENT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
<<<<<<< HEAD
            type: INGREDIENT_UPDATE_FAIL,
=======
            type: INGREDIENT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
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
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896

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
<<<<<<< HEAD

=======
>>>>>>> c8c4311d8af6272af74209683e517e3f241e8896
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}