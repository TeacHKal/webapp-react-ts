import { filter, map, switchMap } from "rxjs/operators";
import { from, Observable, of } from "rxjs";
import { counterActions, counterReducer } from '../../features/counter';
import { Action } from "@reduxjs/toolkit";
import { MyEpic } from '../../store/configureStore';

const { increment } = counterActions;

export const increment1Epic: MyEpic
    = (action$: Observable<Action>, state$, { api }) =>
    action$.pipe(
        filter(increment.match),
        switchMap(action =>
            // @ts-ignore
            from(of(api.counter.increase(state$.value.counter.value)))
                .pipe(map((value: number) => counterReducer.saveValue(value)))
        )
    )

// TODO Fix epic
// export const pingEpic: MyEpic = (action$: Observable<Action>, state$, { api }) =>
//     action$.pipe(
//         filter(pingPong.match)
//             .pipe(() => of(delay(3000)))
//             .pipe(map(() => {
//                 return { type: 'haha' }
//             })),
//     )
