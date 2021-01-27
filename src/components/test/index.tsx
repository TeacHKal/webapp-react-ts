import React from 'react';
import './index.scss';

interface IProps {}

export const Test: React.FC<IProps> = () => {

    const onBtnClick = () => {
        console.log('btn click');
    }
    return(
        <div className={'test_con'}>
            <p>TEST SCREEN</p>
            <button onClick={() => onBtnClick()}>Button</button>
        </div>
    );
}