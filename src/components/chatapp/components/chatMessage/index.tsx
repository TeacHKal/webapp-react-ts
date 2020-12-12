import React from "react";
import firebase from "firebase";
import { Avatar } from '../../../avatar';
import './index.scss';

interface IProps {
    message: IMessage
}

interface IMessage {
    text: string,
    uid: string,
    photoURL: string,
    createdAt: string
}
export const ChatMessage: React.FC<IProps> = (props) => {

    const { text, uid, photoURL, createdAt } = props.message;
    const auth = firebase.auth();

    // @ts-ignore
    const messageType = uid === auth.currentUser.uid ? "sent" : "received";
    let messageClass = 'chatMessage_' + messageType;


    const renderAvatar = () => {
        return(
            <div className={'chatMessage_avatar'}>
                <Avatar url={photoURL}/>
            </div>)
    }

    const renderText = () => {
        return (
                <div className={`chatMessage_text ${messageClass}`}>
                    {text}
                </div>
        )
    }

    const renderMessage = () => {

        let msg;
        if(messageType === 'sent'){
            msg = (
                <div className={`chatMessage_right chatMessage_msg `}>
                    {renderText()}
                    {renderAvatar()}
                </div>
            )
        }else{
            msg = (
                <div className={`chatMessage_left  chatMessage_msg`}>
                    {renderAvatar()}
                    {renderText()}
                </div>
            )
        }

        return msg;

    }

    return(
        <div className={`chatMessage_con`}>
            {renderMessage()}
        </div>
    );
}