import { TodosState } from './reducer';

export const getTodos = (state: TodosState) => state.list;
//export const getTodos = (state: RootState) => state.todos;
