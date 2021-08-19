import axios from 'axios'
import { INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS } from '../constants/ingredientConstants'
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

