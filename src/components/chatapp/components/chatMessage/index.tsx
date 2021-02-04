import React from "react";
import { Avatar } from '../../../avatar';
import './index.scss';
import {  Message } from "ChatAppTypes";

interface IProps {
    message: Message
    auth: any,
}

export const ChatMessage: React.FC<IProps> = (props) => {

    const { text, uid, photoURL } = props.message;

    const messageType = uid === props.auth.currentUser.uid ? "sent" : "received";
    let messageClass = 'chatMessage_' + messageType;


    const renderAvatar = () => {
        return (
            <div className={ 'chatMessage_avatar' }>
                <Avatar url={ photoURL }/>
            </div>)
    }

    const renderText = () => {
        return (
            <div className={ `chatMessage_text ${ messageClass }` }>
                { text }
            </div>
        )
    }

    const renderMessage = () => {

        let msg;
        if (messageType === 'sent') {
            msg = (
                <div className={ `chatMessage_right chatMessage_msg ` }>
                    { renderText() }
                    { renderAvatar() }
                </div>
            )
        } else {
            msg = (
                <div className={ `chatMessage_left  chatMessage_msg` }>
                    { renderAvatar() }
                    { renderText() }
                </div>
            )
        }

        return msg;

    }

    return (
        <div className={ `chatMessage_con` }>
            { renderMessage() }
        </div>
    );
}