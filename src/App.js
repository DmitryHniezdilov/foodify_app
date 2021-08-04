import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Router from './Router';
import {localStorageHelper} from './utils';
import * as action from './redux/actions/general';

const App = () => {
    const dispatch = useDispatch();
    const { recipeFavourList } = useSelector((state) => state.general);

    useEffect(() => {
        dispatch(action.setRecipe());
    }, []);

    useEffect(() => {
        localStorageHelper.store(recipeFavourList);
    }, [ recipeFavourList ]);

    return (
        <Router/>
    );
};

export default App;
