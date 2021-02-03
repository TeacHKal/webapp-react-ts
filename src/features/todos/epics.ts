import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { MyEpic } from '../../store/configureStore';
import { getTodosRequest, getTodosFailure, getTodosSuccess } from './reducer';
import { Todo } from "MyModels";
import { getTodos } from "./actions";

export const getTodosEpic: MyEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(getTodos.match),
        switchMap(() =>
            from(api.todosService.getTodos()).pipe(
                map((payload: any) => {
                    return getTodosSuccess(payload)
                }),
                catchError((message: string) => {
                    return of(getTodosFailure())})
            )
        )
    );
