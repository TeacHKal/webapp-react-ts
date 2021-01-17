import React from 'react';
import './index.scss';
import RouterSwitch from "../../../components/RouterSwitch";

export const AppMainCenter: React.FC = () => {

    return(
        <div className={'appMainCenter_con'}>
            <RouterSwitch/>
        </div>
    );
}