import React, {useRef, useState} from 'react';
import firebase from "firebase";
import SendIcon from '@material-ui/icons/Send';
import './index.scss'
import {TextField} from "@material-ui/core";

export const MessageComposer: React.FC = () => {
    const [inputMessage, setInputMessage] = useState('');
    const bottomSpan = useRef();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const auth = firebase.auth();

    const sendMessage = async (e: any) => {
        e.preventDefault();
        if(inputMessage === "") return;
        // @ts-ignore
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: inputMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setInputMessage('');
        //current.scrollIntoView({ behavior: 'smooth' });
    }

    const sendIconColor = () => {
        return inputMessage === "" ? '#A9A9A9' : '#25d366';

    }

    return(
        <div className={'messageComposer_con'}>
            <TextField
                id="standard-multiline-flexible"
                label="Message"
                multiline
                rowsMax="3"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={"Type a message..."}

            />
            <div className={'messageComposer_sendIcon'}>
            <SendIcon
                onClick={(e) => sendMessage(e)}
                color={'inherit'}
                style={{color: sendIconColor()}}
            />
            </div>
        </div>
    );
}