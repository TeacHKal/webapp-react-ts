import { from, of } from 'rxjs';
import { filter, map, catchError, exhaustMap } from 'rxjs/operators';
import { MyEpic } from '../../store/configureStore';
import { getTodosRequest, getTodosFailure, getTodosSuccess } from './reducer';
import { Todo } from "MyModels";
import { getTodosRequestAction } from "./actions";


export const getTodosEpic: MyEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(getTodosRequestAction.match),
        map(() => getTodosRequest()),
        exhaustMap(() =>
            from(api.todosService.getTodos()).pipe(
                map((payload: any) => {
                    return getTodosSuccess(payload.data)
                }),
                catchError((message: string) => {
                    console.log('getTodosRequest Error', message);
                    return of(getTodosFailure())})
            )
        )
    );
