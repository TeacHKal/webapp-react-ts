import React from 'react';
import './index.scss';
import WarningIcon from '@material-ui/icons/Warning';

export const AppFooter: React.FC = () => {

    return(
        <div className={'footer_con'}>
            <div className={'underConstruction_div'}>
                <div className={'underConstruction_icon'}>
                    <WarningIcon color="error" />
                </div>
                SITE UNDER CONSTRUCTION
                <div className={'underConstruction_icon'}>
                    <WarningIcon color="error" />
                </div>
            </div>
        </div>
    );
}