//import { Counter }from 'MyModels';
import {createAction} from "typesafe-actions";

export const increase = createAction('COUNTER_INCREASE');
export const multiple = createAction('COUNTER_MULTIPLE')<number>();
export const double = createAction('COUNTER_DOUBLE')<number>();
export const triple = createAction('COUNTER_TRIPLE')<number>();

