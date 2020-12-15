import React from 'react';
import firebase from "../../../../modules/firebase";
import "./index.scss";
import { SignOut } from "../signOut";
import {Avatar} from "../../../avatar";

export const ChatHeader: React.FC = () => {
    const user = firebase.getUser();
    const photoUrl = user ? user.photoURL : '';
    return(
            <div className={'chatHeader_con'}>
                <div className={'chatHeader_empty'}><Avatar url={photoUrl}/></div>
                <div className={'chatHeader_title'}>Chat App</div>
                <div className={'chatHeader_options'}>{<SignOut/>}</div>
            </div>
    );
}