import React from 'react';
import "./index.scss";
import { SignOut } from "../signOut";

export const ChatHeader: React.FC = () => {

    return(
            <div className={'chatHeader_con'}>
                <div className={'chatHeader_title'}>Chat App</div>
                <div className={'chatHeader_options'}>{<SignOut/>}</div>
            </div>
    );
}