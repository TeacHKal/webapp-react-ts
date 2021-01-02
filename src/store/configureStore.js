import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import logger from "../middleware/logger";
import api from "../middleware/api"
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default function () {
    return configureStore({
        reducer: rootReducer(history),
        middleware: [
            ...getDefaultMiddleware(),
            logger({description: "Console Logger:"}),
            api,
        ]
    })
}
