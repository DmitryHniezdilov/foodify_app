import * as types from '../actionTypes';

export const initialState = {
    recipe:           {},
    recipeFavourList: [],
    isLoading:        true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case types.FINISH_LOADING:
            return {
                ...state,
                isLoading: false,
            };

        case types.SET_RECIPE:
            return {
                ...state,
                recipe: action.recipe,
            };

        case types.SET_PLACEHOLDER: // for test placeholder - uncomment str in Main.js
            return {
                ...state,
                recipe: action.recipe,
            };

        case types.SET_FAVOUR_LIST:
            return {
                ...state,
                recipeFavourList: action.favourList,
            };

        default:
            return {
                ...state,
            };
    }
};
