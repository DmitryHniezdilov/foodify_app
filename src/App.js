import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Loading from './components/Loading';
import Router from './Router';
import * as action from './redux/actions/general';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.setRecipe());
    }, []);

    return (
        <>
            <Loading/>
            <Router/>
        </>
    );
};

export default App;
