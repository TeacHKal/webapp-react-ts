import { Todo } from 'MyModels';
import cuid from 'cuid';
import { createAction, createAsyncAction } from 'typesafe-actions';
const prefix = '##todo/';
export const addTodo = createAction(`${prefix}ADD`, (title: string) => ({
  id: cuid(),
  title,
}))<Todo>();

export const removeTodo = createAction(`${prefix}REMOVE`)<string>();

export const loadTodosAsync = createAsyncAction(
  'LOAD_TODOS_REQUEST',
  'LOAD_TODOS_SUCCESS',
  'LOAD_TODOS_FAILURE'
)<undefined, Todo[], string>();

export const saveTodosAsync = createAsyncAction(
  'SAVE_TODOS_REQUEST',
  'SAVE_TODOS_SUCCESS',
  'SAVE_TODOS_FAILURE'
)<undefined, undefined, string>();

//export const pingPong = () => ({ type: 'PING' });
//export const pingPong = createAction(`${prefix}PING_PONG`);

export const pingPong = createAction(`${prefix}PING_PONG`, (title: string) => ({
  id: cuid(),
  title,
}))<Todo>();

// export const PING = 'PING';
// export const pingPong = (payload = {}) => ({
//   type: PING,
//   payload,
// });

export const NO_OP = {
  type: 'rnd',
  //payload: {},
}


