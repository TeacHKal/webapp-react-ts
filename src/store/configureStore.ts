import {
    AnyAction,
    configureStore,
    getDefaultMiddleware, applyMiddleware
} from "@reduxjs/toolkit";
import { createEpicMiddleware, Epic } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { compose } from 'redux';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

const LOGGER_REDUX_ENABLE = true;

export const history = createBrowserHistory();
export type MyState = ReturnType<typeof rootReducer>;
export type MyEpic = Epic<AnyAction, AnyAction, MyState>;

const epicMiddleware = createEpicMiddleware<
    AnyAction,
    AnyAction,
    MyState>
({
    dependencies: services,
});

const enhancers: any = [];

if (LOGGER_REDUX_ENABLE) {
    const { logger } = require(`redux-logger`);
    enhancers.push(logger);
}

const enhancer = compose(applyMiddleware(...enhancers));


// rehydrate state on app start
const initialState = {};

export const store = configureStore({
    reducer: rootReducer(history),
    middleware:
        getDefaultMiddleware({
            thunk: false // or true if you want to use thunks
        })
            .concat(epicMiddleware),
    preloadedState: initialState,
    enhancers: [ enhancer ]
});

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
