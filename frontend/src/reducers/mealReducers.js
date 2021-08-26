import { MEAL_LIST_FAIL, MEAL_LIST_REQUEST, MEAL_LIST_SUCCESS, MEAL_ONE_FAIL, MEAL_ONE_REQUEST, MEAL_ONE_SUCCESS, MEAL_REMOVE_FAIL, MEAL_REMOVE_REQUEST, MEAL_REMOVE_SUCCESS } from "../constants/mealConstants"

export const mealListReducer = (state = { meals: [] }, action) => {
    switch (action.type) {
        case MEAL_LIST_REQUEST:
            return { loading: true, meals: [] }
        case MEAL_LIST_SUCCESS:
            return { loading: false, meals: action.payload }
        case MEAL_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const mealRemovedReducer = (state = {}, action) => {
    switch (action.type) {
        case MEAL_REMOVE_REQUEST:
            return { loading: true };
        case MEAL_REMOVE_SUCCESS:
            return { loading: false, success: true, meal: action.payload }
        case MEAL_REMOVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const mealOneReducer = (state = {}, action) => {
    switch (action.type) {
        case MEAL_ONE_REQUEST:
            return { loading: true };
        case MEAL_ONE_SUCCESS:
            return { loading: false, success: true, meal: action.payload }
        case MEAL_ONE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}