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

// for test placeholder - uncomment str in Main.js
export const deleteThumbFromRecipe = (recipe) => {
    const newReciepe = recipe;
    newReciepe.strMealThumb = '';

    return { type: types.SET_PLACEHOLDER, recipe: newReciepe };
};

export const setFavourList = (favourList) => {
    console.log('favourList', favourList);

    return  { type: types.SET_FAVOUR_LIST, favourList };
};
