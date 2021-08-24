import { CALCULATOR_CREATE_FAIL, CALCULATOR_CREATE_REQUEST, CALCULATOR_CREATE_SUCCESS, CALCULATOR_MINE_LIST_FAIL, CALCULATOR_MINE_LIST_REQUEST, CALCULATOR_MINE_LIST_SUCCESS } from "../constants/calculatorConstants";

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

export const calculatorMineReducer = (state = { calculators: [] }, action) => {
    switch (action.type) {
        case CALCULATOR_MINE_LIST_REQUEST:
            return { loading: true };
        case CALCULATOR_MINE_LIST_SUCCESS:
            return { loading: false, calculators: action.payload };
        case CALCULATOR_MINE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}