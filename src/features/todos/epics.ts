import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { MyEpic } from '../../store/configureStore';
import { getTodosRequest, getTodosFailure, getTodosSuccess } from '../../features/todos/reducer';
import { Todo } from "MyModels";
import { getTodos } from "./actions";



export const getTodosEpic: MyEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(getTodos.match),
        switchMap(() =>
            from(api.todosService.getTodos()).pipe(
                map((payload: any) => getTodosSuccess(payload.data)),
                catchError((message: string) => {
                    console.log('getTodosEpic Error', message)
                    return of(getTodosFailure())})
            )
        )
    );

// export const loadTodosEpic: Epic<RootAction, RootAction, RootState, Services>
//     = (action$, state$, { api }) =>
//   action$.pipe(
//     filter(isActionOf(loadTodosAsync.request)),
//     switchMap(() =>
//       from(api.todosService.loadSnapshot()).pipe(
//         map(loadTodosAsync.success),
//         catchError((message: string) => of(loadTodosAsync.failure(message)))
//       )
//     )
//   );

//
// export const saveTodosEpic: MyEpic = (action$, state$, { api }) =>
//   action$.pipe(
//     filter(isActionOf(saveTodosAsync.request)),
//     switchMap(() =>
//         // @ts-ignore
//       from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
//         map(saveTodosAsync.success),
//         catchError((message: string) => of(saveTodosAsync.failure(message)))
//       )
//     )
//   );



