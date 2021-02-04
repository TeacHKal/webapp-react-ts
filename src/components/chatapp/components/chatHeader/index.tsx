import React from 'react';
import { Avatar } from "../../../avatar";
import language from '../../../../config/languages';
import { Button } from "../../../baseComponents/button";
import "./index.scss";

type User = {
    photoURL: string
}

interface IProps {
    signOut: () => void,
    user: User,
}

export const ChatHeader: React.FC<IProps> = (props) => {
    const strings = language.strings.chatApp;
    const photoUrl = props.user ? props.user.photoURL : '';

    const renderSignInBtn = () => {
        return (
            <div>
                <Button
                    text={ strings.signOut }
                    onClick={ () => props.signOut() }
                    variant="contained"
                    color="secondary"
                    size="small"
                    disabled={ !props.user }

                >
                </Button>
            </div>
        );
    }

    return (
        <div className={ 'chatHeader_con' }>
            <div className={ 'chatHeader_empty' }><Avatar url={ photoUrl }/></div>
            <div className={ 'chatHeader_title' }>{ strings.chatApp }</div>
            <div className={ 'chatHeader_options' }>{ renderSignInBtn() }</div>
        </div>
    );
}