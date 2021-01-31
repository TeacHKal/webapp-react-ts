import { RootAction, RootState, Services, isActionOf, action } from 'typesafe-actions';
import { Epic, ofType } from "redux-observable";
import { catchError, delay, filter, map, mapTo, mergeMap, switchMap } from "rxjs/operators";
import { from, Observable, of } from "rxjs";
import { counterActions, counterReducer } from '../../features/counter';
import { Action } from "@reduxjs/toolkit";

const { increment } = counterActions;
export const incrementEpic: Epic<RootAction, RootAction, RootState, Services>
    = (action$: Observable<Action>, state$, { api }) =>
    action$.pipe(
        filter(increment.match),
        switchMap(action => {
            // @ts-ignore
            return from(of(api.counter.increase(state$.value.counter.value))).pipe(
                map((value: number) => {
                        console.log('teachVVV', value);
                        return counterReducer.saveValue(value);
                    }
                )
            )
        })
    )

// export const pingEpic: Epic<RootAction, RootAction, RootState, Services>
//     = (action$, state$, { api }) =>
//     action$.ofType('COUNTER_MULTIPLE')
//         .pipe(delay( 6000 )) // Asynchronously wait x ms then continue
//         .pipe(map(() => {
//             return {type: 'haha'}
//         }))

//
// export const increase1Epic: Epic<RootAction, RootAction, RootState, Services>
//     = (action$, state$, { api }) =>
//     action$.pipe(
//         filter(action => action.type === counterActions.increase.toString()),
//         switchMap(action =>
//             from(api.counter.increase(1)).pipe(
//                 //of(console.log('teach', 2)),
//                 map((value: number) =>counterReducer.saveValue(value))
//             )
//         )
//     )
//
// export const doubleEpic: Epic<RootAction, RootAction, RootState, Services>
//     = (action$, state$, { api }) =>
//     action$.pipe(
//         filter(isActionOf(counterActions.double)),
//         switchMap(action =>
//             from(api.counter.double).pipe(
//                 map(counterReducer.saveValue))))

