import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import { History } from 'history';
import todosReducer from '../features/todos/reducer';
import counterReducer from '../features/counter/reducer';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  todos: todosReducer,
  counter: counterReducer,
});

export default rootReducer;
