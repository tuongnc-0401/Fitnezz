import axios from 'axios'
import { CALCULATOR_CREATE_FAIL, CALCULATOR_CREATE_REQUEST, CALCULATOR_CREATE_SUCCESS } from '../constants/calculatorConstants'

export const createCalculator = (calculatorInfo) => async (dispatch, getState) => {
    dispatch({ type: CALCULATOR_CREATE_REQUEST, payload: calculatorInfo })
    try {
        const { userSignIn: { userInfo } } = getState()
        console.log(userInfo);
        const { data } = await axios.post('/api/calculators', calculatorInfo, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({ type: CALCULATOR_CREATE_SUCCESS, payload: data.calculatorInfo })

    } catch (error) {
        dispatch({
            type: CALCULATOR_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}