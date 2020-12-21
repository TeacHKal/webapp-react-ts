import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { ChatMessage } from "../chatMessage";
import './index.scss';
import firebase from '../../../../modules/firebase';
import { CircularProgress } from "@material-ui/core";

interface IProps {
    loading: boolean,
    ref: any,
}

export const ChatMsgWin: React.FC<IProps> = forwardRef((props, ref) => {
    const { loading } = props;
    useImperativeHandle(ref, () => ({
        slideToBottomTimeOut,
    }));

    const messages = firebase.MessageArr();
    const msgBottomSpanRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        slideToBottom();
    }, [messages]);

    const slideToBottom = () => {
        msgBottomSpanRef.current && msgBottomSpanRef.current.scrollIntoView({ behavior: "smooth" });

    }
    const slideToBottomTimeOut = () => {
        setTimeout(() => slideToBottom() , 1);
    }

    const renderChatMessageWindow = () => {
        return !loading && messages && messages.length > 0 ? renderWithMessages() : renderWithOutMessages();
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
            <div className={'chatMsgWin_con_hidden'}>
                <CircularProgress disableShrink={true}/>
            </div>
        )}

    return renderChatMessageWindow()
})