import React from 'react';
import './index.scss';
import {useDispatch} from "react-redux";
import { counterActions } from "../../features/counter";
interface IProps {}

export const Test: React.FC<IProps> = () => {
    const dispatch = useDispatch();


    const onBtnClick = () => {
        //dispatch(pingPong());
        dispatch(counterActions.increment());
        //dispatch(counterActions.multiple(2));
    }

    return(
        <div className={'test_con'}>
            <p>TEST SCREEN</p>
            <button onClick={() => onBtnClick()}>Button</button>
        </div>
    );
}