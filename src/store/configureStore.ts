import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, Epic  } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';
import { createBrowserHistory } from 'history';
import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';
import {configureStore, getDefaultMiddleware, AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {delay, filter, map} from "rxjs/operators";

export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
    >({
    dependencies: services,
});

export type MyEpic = Epic<RootAction, RootAction, RootState, Services>;

// configure middlewares
const middlewares = [epicMiddleware];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

export const store = configureStore({
    reducer: rootReducer(history),
    middleware: [
        ...getDefaultMiddleware({
            thunk: false // or true if you want to use thunks
        }),
        epicMiddleware
    ],
    preloadedState: initialState,
    enhancers: [enhancer]
});

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
