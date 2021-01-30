import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError, tap, delay } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import {loadTodosAsync, NO_OP, pingPong, saveTodosAsync} from './actions';
import { getTodos } from './selectors';

export const loadTodosEpic: Epic<RootAction, RootAction, RootState, Services>
    = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(() =>
      from(api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

export const pingEpic: Epic<RootAction, RootAction, RootState, Services>
    = (action$, state$, { api }) =>
    action$.ofType('##todo/PING_PONG')
        .pipe(delay( 3000 )) // Asynchronously wait x ms then continue
        .pipe(map(() => {
            return {type: 'haha'}
        }))

//export const pingEpic2: Epic<
//     RootAction,
//     RootAction,
//     RootState,
//     Services
//     > = (action$, state$, { api }) =>
//     action$.pipe(
//         filter(isActionOf(pingPong)),
//         switchMap(() =>
//             from(api.todos.loadSnapshot()).pipe(map((x) => {
//                 return {type: 'heh'}
//             }))
//         )
//     );

// export const saveTodosEpic: Epic<
//   RootAction,
//   RootAction,
//   RootState,
//   Services
// > = (action$, state$, { api }) =>
//   action$.pipe(
//     filter(isActionOf(saveTodosAsync.request)),
//     switchMap(() =>
//       from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
//         map(saveTodosAsync.success),
//         catchError((message: string) => of(saveTodosAsync.failure(message)))
//       )
//     )
//   );


