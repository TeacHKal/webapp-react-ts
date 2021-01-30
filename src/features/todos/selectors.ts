// import { createSelector } from 'reselect';

import { TodosState } from './reducer';
import {RootState} from 'typesafe-actions';
export const getTodos = (state: TodosState) => state.todos;
//export const getTodos = (state: RootState) => state.todos;
