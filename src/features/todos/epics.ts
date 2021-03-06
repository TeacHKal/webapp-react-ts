import { from, of } from 'rxjs';
import { filter, map, catchError, exhaustMap, startWith } from 'rxjs/operators';
import { MyEpic } from '../../store/configureStore';
import { getTodosRequest, getTodosFailure, getTodosSuccess } from './reducer';
import { getTodosRequestAction } from "./actions";

export const getTodosEpic: MyEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(getTodosRequestAction.match),
        exhaustMap(() =>
            from(api.todosService.getTodos())
                .pipe(map((payload: any) => getTodosSuccess(payload.data)),
                    catchError((message: string) => {
                        console.log('getTodosRequest Error', message);
                        return of(getTodosFailure())
                    })
                )
        )
    );


