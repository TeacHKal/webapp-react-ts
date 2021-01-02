import React from 'react';
import { NavBottom } from '../../components/navBottom';
import './index.scss';

export const AppFooter: React.FC = () => {

    return(
        <div className={'footer_con'}>
            <NavBottom />
        </div>
    );
}