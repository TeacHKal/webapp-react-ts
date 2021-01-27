import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { createBrowserHistory } from 'history';
import {middlewares} from '../middleware';

export const history = createBrowserHistory();




export default function () {
    return configureStore({
        reducer: rootReducer(history),
        middleware: [
            ...getDefaultMiddleware(),
            ...middlewares,
        ]
    })
}
