import { routerActions } from 'react-router-redux';
import * as todosActions from '../features/todos/actions';
import * as counterActions from '../features/counter/actions';

export default {
  router: routerActions,
  todos: todosActions,
  counter: counterActions,
};
