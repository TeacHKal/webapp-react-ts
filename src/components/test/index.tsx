import React from 'react';
import './index.scss';
import {useDispatch} from "react-redux";
import { counterActions } from "../../features/counter";
import { todosActions } from "../../features/todos";

interface IProps {}

export const Test: React.FC<IProps> = () => {
    const dispatch = useDispatch();

    const onBtnClick = () => {
        //dispatch(counterActions.increment());
        dispatch(counterActions.pingPong());
        dispatch(todosActions.getTodos());
    }

    return(
        <div className={'test_con'}>
            <p>TEST SCREEN</p>
            <button onClick={() => onBtnClick()}>Button</button>
        </div>
    );
}