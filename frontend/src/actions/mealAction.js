import axios from 'axios'
import { MEAL_LIST_FAIL, MEAL_LIST_REQUEST, MEAL_LIST_SUCCESS, MEAL_REMOVE_FAIL, MEAL_REMOVE_REQUEST, MEAL_REMOVE_SUCCESS } from '../constants/mealConstants'

export const listMeal = () => async (dispatch, getState) => {
    dispatch({ type: MEAL_LIST_REQUEST })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.get('/api/meals', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: MEAL_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MEAL_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const deletedMeal = (mealId) => async (dispatch, getState) => {
    dispatch({ type: MEAL_REMOVE_REQUEST, payload: mealId })
    const { userSignIn: { userInfo } } = getState()
    try {
        const { data } = await axios.delete(`/api/meals/` + mealId, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: MEAL_REMOVE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: MEAL_REMOVE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}