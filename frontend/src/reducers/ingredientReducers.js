import { INGREDIENT_DETAILS_FAIL, INGREDIENT_DETAILS_REQUEST, INGREDIENT_DETAILS_RESET, INGREDIENT_DETAILS_SUCCESS, INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS, INGREDIENT_UPDATE_FAIL, INGREDIENT_UPDATE_REQUEST, INGREDIENT_UPDATE_SUCCESS } from "../constants/ingredientConstants"

export const ingredientListReducer = (state = { ingredients: [] }, action) => {
    switch (action.type) {
        case INGREDIENT_LIST_REQUEST:
            return { loading: true, ingredients: [] }
        case INGREDIENT_LIST_SUCCESS:
            return { loading: false, ingredients: action.payload }
        case INGREDIENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const ingredientUpdatedReducer = (state = {}, action) => {
    switch (action.type) {
        case INGREDIENT_UPDATE_REQUEST:
            return { loading: true };
        case INGREDIENT_UPDATE_SUCCESS:
            return { loading: false, success: true, ingredient: action.payload }
        case INGREDIENT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const ingredientDetailsReducer = (state = { ingredient: {}, loading: true }, action) => {
    switch (action.type) {
        case INGREDIENT_DETAILS_REQUEST:
            return { loading: true };
        case INGREDIENT_DETAILS_SUCCESS:
            return { loading: false, success: true, ingredient: action.payload }
        case INGREDIENT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case INGREDIENT_DETAILS_RESET:
            return { product: {}, success: false }
        default:
            return state
    }
}