import { INGREDIENT_CREATE_FAIL, INGREDIENT_CREATE_REQUEST, INGREDIENT_CREATE_SUCCESS, INGREDIENT_LIST_FAIL, INGREDIENT_LIST_REQUEST, INGREDIENT_LIST_SUCCESS, INGREDIENT_REMOVE_FAIL, INGREDIENT_REMOVE_REQUEST, INGREDIENT_REMOVE_SUCCESS } from "../constants/ingredientConstants"

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

export const ingredientRemovedReducer = (state = {}, action) => {
    switch (action.type) {
        case INGREDIENT_REMOVE_REQUEST:
            return { loading: true };
        case INGREDIENT_REMOVE_SUCCESS:
            return { loading: false, success: true, ingredient: action.payload }
        case INGREDIENT_REMOVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const ingredientCreatedReducer = (state = { ingredient: {}, success: false }, action) => {
    switch (action.type) {
        case INGREDIENT_CREATE_REQUEST:
            return { loading: true };
        case INGREDIENT_CREATE_SUCCESS:
            return { loading: false, success: true, ingredient: action.payload }
        case INGREDIENT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}