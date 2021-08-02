import * as types from '../actionTypes';

export const setRecipe = () => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const recipe = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then((res) => {
            return res.meals[ 0 ];
        });

    dispatch({type: types.SET_RECIPE, recipe});
    dispatch({type: types.FINISH_LOADING});
};

export const setFavourList = (favourList) => {
    return  { type: types.SET_FAVOUR_LIST, favourList };
};

export const setCustomDish = (favourList) => {
    return  { type: types.SET_CUSTOM_DISH_TO_FAVOUR_LIST, favourList };
};

export const setOpenModal = () => ({ type: types.OPEN_MODAL });

export const setClosedModal = () => ({ type: types.CLOSED_MODAL });
