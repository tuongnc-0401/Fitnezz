import { CALCULATOR_CREATE_FAIL, CALCULATOR_CREATE_REQUEST, CALCULATOR_CREATE_SUCCESS } from "../constants/calculatorConstants";

export const calculatorCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CALCULATOR_CREATE_REQUEST:
            return { loading: true }
        case CALCULATOR_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload }
        case CALCULATOR_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}