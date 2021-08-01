import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {localStorageHelper} from '../utils';
import general, {initialState} from './reducers/general';

const rootReducer = combineReducers({
    general,
});

const persistedState  = (initialState) => {
    const initialFavourList = localStorageHelper.load();

    return { general: {
        ...initialState,
        recipeFavourList: initialFavourList,
    }};
};

const store = createStore(
    rootReducer,
    persistedState(initialState),
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const InitStore = ({ children }) => (
    <Provider store = { store }>
        {children}
    </Provider>
);

export default InitStore;
