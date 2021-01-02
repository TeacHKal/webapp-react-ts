import React from 'react';
import { AppMainLeft } from "../appMainLeft";
import { AppMainCenter } from "../appMainCenter";
import { AppMainRight } from "../appMainRight";
import './index.scss';


export const AppBody: React.FC = () => {

    return(
        <div className={'appBody_con'}>
            <AppMainLeft/>
            <AppMainCenter/>
            <AppMainRight/>
        </div>
    );


}