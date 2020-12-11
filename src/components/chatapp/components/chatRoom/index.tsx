import React from "react";
import firebase from "firebase";
import 'firebase/auth';
import {useCollectionData} from "react-firebase-hooks/firestore";
import { ChatMessage } from "../chatMessage";
import { ChatHeader } from "../chatHeader";
import './index.scss';
import backgroundImage from "../../resourses/images/chatAppBackground.png"
import { MessageComposer } from "../messageComposer";

const style={
    backgroundImage: `url(${backgroundImage})`

}

export const ChatRoom: React.FC = () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(30);
    const [messages] = useCollectionData(query, {idField: 'id'}); // Hook



    const signOut = () => {
        auth.signOut();
    }

    console.log('messages', messages)
    return (
        <div style={style} className={'chatRoom_con'}>
            {<ChatHeader/>}
            <div className={'chatRoom_msgWin'}>{messages && messages.map(msg => {
                // @ts-ignore
                return <ChatMessage key={msg.id} message={msg}/>
            })}</div>
            { <MessageComposer/> }
        </div>
    );
}