import { filter, map, mapTo, switchMap } from "rxjs/operators";
import { from, Observable, of } from "rxjs";
import { counterActions, counterReducer } from '../../features/counter';
import { Action } from "@reduxjs/toolkit";
import { MyEpic } from '../../store/configureStore';
import { ofType } from "redux-observable";

const { increment } = counterActions;

export const increment1Epic: MyEpic
    = (action$: Observable<Action>, state$, { api }) => {
    return action$.pipe(
        filter(increment.match),
        switchMap(action =>
            // @ts-ignore
            from(of(api.counterService.increase(state$.value.counter.value)))
                .pipe(map((value: number) => counterReducer.saveValue(value)))
        )
    )
}
// TODO Fix epic
export const pingEpic: any = (action$: Observable<Action>) =>
    action$.pipe(
        ofType("ping"),
        mapTo({ type: "pong" }),
    );


//TEST
// test("ping epic", () => {
//     expect(
//         pingEpic(of({ type: "ping" })).toPromise()
//     ).resolves.toEqual(
//         { type: "pong" }
//     );
// });
