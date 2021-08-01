import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Router from './Router';
import Loading from './components/Loading';
import AddDishModal from './containers/AddDishModal';
import * as action from './redux/actions/general';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.setRecipe());
    }, []);

    return (
        <>
            <AddDishModal/>
            <Loading/>
            <Router/>
        </>
    );
};

export default App;
