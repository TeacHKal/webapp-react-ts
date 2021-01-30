import { RootAction, RootState, Services, isActionOf, action } from 'typesafe-actions';
import { Epic } from "redux-observable";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/mapTo';

export const NO_OP = { type: 'NO_OP' };

// export const doubleEpic: Epic<RootAction, RootAction, RootState, Services>
//     = (action$, state$, { api }) =>
//     action$.pipe(
//         filter(isActionOf(double)),
//         mergeMap(({ payload }) => {
//             console.log('PAYLOAD', payload);
//
//             return of(double(2));
//
//         }),
//     );

// export const pingEpic: Epic<RootAction, RootAction, RootState, Services>
//     = (action$, state$, { api }) =>
//     action$.ofType('PING')
//         //.delay(1000) // Asynchronously wait 1000ms then continue
//         .pipe(tap(value => console.log(value)))
//         .EMPTY.of({})

export const pingEpic: Epic<RootAction, RootAction, RootState, Services>
    = (action$, state$, { api }) =>
    action$.ofType('PING')
        //.delay(1000) // Asynchronously wait 1000ms then continue
        .pipe(map((x) => {
            return { type: 'heh' }
        }))