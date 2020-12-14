import React, {useEffect, useRef} from 'react';
import {ChatMessage} from "../chatMessage";
import './index.scss';
import firebase from '../../../../modules/firebase';
import { LinearProgress} from "@material-ui/core";

export const ChatMsgWin: React.FC = () => {
    const messages = firebase.MessageArr();

    const msgBottomSpanRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        msgBottomSpanRef.current && msgBottomSpanRef.current!.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const renderChatMessageWindow = () => {
        return messages && messages.length > 0 ? renderWithMessages() : renderWithOutMessages();
        //return renderWithOutMessages();
    }

    const renderWithMessages = () => {
        return(
            <div className={'chatMsgWin_con'}>{messages && messages.reverse().map(msg => {
                // @ts-ignore
                return <ChatMessage key={msg.id} message={msg}/>
            })}
                <span ref={msgBottomSpanRef}/>
            </div>
        );
    }

    const renderWithOutMessages = () => {
        return (
            <div className={'chatMsgWin_con'}>
                <LinearProgress />
            </div>
        )}

    return renderChatMessageWindow()
}