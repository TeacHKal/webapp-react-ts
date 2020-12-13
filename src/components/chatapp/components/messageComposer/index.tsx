import React, {useRef, useState} from 'react';
import firebase from "firebase";
import SendIcon from '@material-ui/icons/Send';
import './index.scss'
import {TextField} from "@material-ui/core";

export const MessageComposer: React.FC = () => {
    const [inputMessage, setInputMessage] = useState('');
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const auth = firebase.auth();

    const sendIconRef = useRef();

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
    }

    const sendIconColor = () => {
        return inputMessage === "" ? '#A9A9A9' : '#25d366';

    }

    const onEnterKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            const msgResponse = sendMessage(e);
            console.log("msgResponse", msgResponse);
        }
    }

    return(
        <div className={'messageComposer_con'}>
            <TextField
                id="standard-multiline-flexible"
                label="Message"
                rowsMax="3"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={"Type a message..."}
                onKeyPress={(e) => onEnterKeyPress(e)}
                margin={'none'}
                fullWidth={true}
            />
            <div className={'messageComposer_sendIcon'}>
            <SendIcon
                onClick={(e) => sendMessage(e)}
                color={'inherit'}
                style={{color: sendIconColor()}}
                innerRef={sendIconRef}
            />
            </div>
        </div>
    );
}