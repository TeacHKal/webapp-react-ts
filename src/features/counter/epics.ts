import {RootAction, RootState, Services, isActionOf, action} from 'typesafe-actions';
import {Epic} from "redux-observable";
import {catchError, filter, map, switchMap, tap} from "rxjs/operators";
import {increase, multiple, double, triple} from "../counter/actions";


export const increaseEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
    > = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(double)),
        tap((value: any) => value * 2)
    );