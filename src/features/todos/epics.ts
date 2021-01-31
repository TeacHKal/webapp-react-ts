import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError, tap, delay } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import { MyEpic } from '../../store/configureStore';
import {loadTodosAsync, saveTodosAsync} from './actions';
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

export const saveTodosEpic: MyEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(saveTodosAsync.request)),
    switchMap(() =>
        // @ts-ignore
      from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
        map(saveTodosAsync.success),
        catchError((message: string) => of(saveTodosAsync.failure(message)))
      )
    )
  );


