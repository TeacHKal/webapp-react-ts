import React from 'react';
import './index.scss';
import { useDispatch } from "react-redux";
import { todosActions } from "../../features/todos";

interface IProps {}

export const Test: React.FC<IProps> = () => {
    const dispatch = useDispatch();

    const onBtnClick = () => {
        dispatch(todosActions.getTodosRequestAction());
    }

    return (
        <div className={ 'test_con' }>
            <p>TEST SCREEN</p>
            <button onClick={ () => onBtnClick() }>Button</button>
        </div>
    );
}