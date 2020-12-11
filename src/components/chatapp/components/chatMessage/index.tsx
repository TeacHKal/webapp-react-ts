import React from "react";
import firebase from "firebase";
import './index.scss';

interface IProps {
    message: IMessage
}

interface IMessage {
    text: string,
    uid: string,
}


export const ChatMessage: React.FC<IProps> = (props) => {

    const { text, uid } = props.message;
    const auth = firebase.auth();

    // @ts-ignore
    let messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    messageClass = 'chatMessage_' + messageClass;

    return(
        <div className={`${messageClass} chatMessage_con`}>
            <div className={`chatMessage_msg`}>
                <div className={'chatMessage_text'}>
                    {text}
                </div>
            </div>
        </div>
    );
}