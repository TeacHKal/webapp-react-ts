import React, {useRef, useState} from 'react';
//import firebase from "firebase";
import SendIcon from '@material-ui/icons/Send';
import './index.scss'
import {TextField} from "@material-ui/core";
import  firebase from '../../../../modules/firebase';

export const MessageComposer: React.FC = () => {
    const [inputMessage, setInputMessage] = useState('');
    // const firestore = firebase.firestore();
    // const messagesRef = firestore.collection('messages');
    // const auth = firebase.auth();

    const sendIconRef = useRef();

    const sendMessage = async (e: any) => {
        e.preventDefault();
        if(inputMessage === "") return;

        // @ts-ignore
        const { uid, photoURL } = firebase.getCurrentUser();
        const messageData = {
            text: inputMessage,
            createdAt: firebase.serverTimestamp(),
            uid,
            photoURL
        }

        await firebase.sendMessage(messageData)
            .then((s) => setInputMessage(''))
            .catch((e) => console.log('error'));


    }

    const sendIconColor = () => {
        return inputMessage === "" ? '#A9A9A9' : '#25d366';

    }

    const onEnterKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            // @ts-ignore
            sendMessage(e);
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