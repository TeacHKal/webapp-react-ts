import React, {useEffect, useRef} from 'react';
import {ChatMessage} from "../chatMessage";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import './index.scss'

export const ChatMsgWin: React.FC = () => {
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(30);
    const [messages] = useCollectionData(query, {idField: 'id'}); // Hook

    const msgBottomSpanRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        msgBottomSpanRef.current!.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const renderChatMessageWindow = () => {
        return(
            <div className={'chatMsgWin_con'}>{messages && messages.map(msg => {
                    // @ts-ignore
                    return <ChatMessage key={msg.id} message={msg}/>
                })}
            <span ref={msgBottomSpanRef}/>
            </div>
        );
    }

    return(
        <div>{renderChatMessageWindow()}</div>
    );
}