//import { Todo } from 'MyModels';
import { createAction } from "@reduxjs/toolkit";

const prefix = '##todo/';

export const getTodos = createAction(`${prefix}GET_TODOS`);






