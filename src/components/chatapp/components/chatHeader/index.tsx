import React from 'react';
import firebase from "../../../../modules/firebase";
import {Avatar} from "../../../avatar";
import language from '../../../../config/languages';
import {Button} from "../../../baseComponents/button";
import "./index.scss";

export const ChatHeader: React.FC = () => {
    const strings = language.strings.chatApp;
    const user = firebase.getUser();
    const photoUrl = user ? user.photoURL : '';

    const onSignInClick = () => {
        firebase.signOut();
    }

    const renderSignInBtn = () => {
        return (
            <div>
                <Button
                    text={strings.signOut}
                    onClick={() => onSignInClick()}
                    variant="contained"
                    color="secondary"
                    size="small"
                    disabled={!user}
                >
                </Button>
            </div>
        );
    }

    return(
            <div className={'chatHeader_con'}>
                <div className={'chatHeader_empty'}><Avatar url={photoUrl}/></div>
                <div className={'chatHeader_title'}>{strings.chatApp}</div>
                <div className={'chatHeader_options'}>{renderSignInBtn()}</div>
            </div>
    );
}