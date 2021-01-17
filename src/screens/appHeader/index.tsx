import React from 'react';
import NavMenu from "../../components/navMenu";
import './index.scss';

export const AppHeader: React.FC = () => {

    return(
        <div className={"header_con"}>
            <NavMenu />
        </div>
    );
}