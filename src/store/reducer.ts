import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from 'history';
import entitiesReducer from "./entitiesReducer";

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    entities: entitiesReducer,
});

export default rootReducer;