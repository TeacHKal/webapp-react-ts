import React from 'react';
import { NavMenuV2 } from "../../../components/navMenuV2";
import './index.scss';

export const AppHeader: React.FC = () => {

    return(
        <div className={"header_con"}>
            <NavMenuV2 />
        </div>
    );
}