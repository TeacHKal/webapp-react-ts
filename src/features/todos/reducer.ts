import { Todo } from 'MyModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadTodosAsync, addTodo, removeTodo } from './actions';

export const isLoadingTodos = createReducer(false as boolean)
  .handleAction([loadTodosAsync.request], (state: any, action: any) => true)
  .handleAction(
    [loadTodosAsync.success, loadTodosAsync.failure],
    (state: any, action: any) => false
  );

export const todos = createReducer([
  {
    id: '0',
    title: 'You can add new todos using the form or load saved snapshot...',
  },
] as Todo[])
  .handleAction(loadTodosAsync.success, (state: any, action: any) => action.payload)
  .handleAction(addTodo, (state: any, action: any) => [...state, action.payload])
  .handleAction(removeTodo, (state: any, action: any) =>
    state.filter((i: any) => i.id !== action.payload)
  );

const todosReducer = combineReducers({
  isLoadingTodos,
  todos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;
