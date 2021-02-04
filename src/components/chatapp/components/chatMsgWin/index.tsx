import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { ChatMessage } from "../chatMessage";
import firebaseModule from '../../../../modules/FirebaseModule';
import { CircularProgress } from "@material-ui/core";
import './index.scss';

interface IProps {
    loading: boolean,
    ref: any,
    auth: any,
}

export const ChatMsgWin: React.FC<IProps> = forwardRef((props, ref) => {
    const { loading } = props;
    const auth = firebaseModule.auth();
    useImperativeHandle(ref, () => ({
        slideToBottomTimeOut,
    }));

    const messages = firebaseModule.MessageArr();
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
            <div className={'chatMsgWin_con'}>{messages && messages.reverse().map((msg: any) => {
                return <ChatMessage
                    key={msg.id}
                    message={msg}
                    auth={auth}
                />
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