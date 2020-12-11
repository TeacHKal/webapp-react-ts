import React, {useRef, useState} from 'react';
import firebase from "firebase";
import './index.scss'

export const MessageComposer: React.FC = () => {
    const [formValue, setFormValue] = useState('');
    const bottomSpan = useRef();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const auth = firebase.auth();

    const sendMessage = async (e: any) => {
        e.preventDefault();
        if(formValue === "") return;
        // @ts-ignore
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        //current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className={'messageComposer_con'}>
            <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={(e) => sendMessage(e)}>Send</button>
        </div>
    );
}