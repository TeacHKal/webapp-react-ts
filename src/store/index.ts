import { createStore, applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';
import { createBrowserHistory } from 'history';
import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

const middlewares = [epicMiddleware];

const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
);

// rehydrate state on app start
const initialState = {};



// @ts-ignore
export default function () {
  return configureStore({
    reducer: rootReducer(history),
    middleware: [
      ...getDefaultMiddleware({thunk: false}),
      ...middlewares,
    ],
    // enhancers: [reduxBatch],
    enhancers: [enhancers],
  })
}

epicMiddleware.run(rootEpic);
