import React, {useRef, useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import {CircularProgress, LinearProgress, TextField} from "@material-ui/core";
import {filterBadWords} from '../../../../modules/filterBadWords';
import  firebase from '../../../../modules/firebase';
import './index.scss'

interface IProps {
    loader?: boolean,
    onShiftEnter: () => {},
}

export const MessageComposer: React.FC<IProps> = (props) => {
    const { loader, onShiftEnter } = props;
    const [inputMessage, setInputMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    const sendIconRef = useRef();

    const sendMessage = async (e: any) => {
        if(inputMessage === "") return;
        setSendingMessage(true);

        // @ts-ignore
        const { uid, photoURL } = firebase.getCurrentUser();
        const messageData = {
            text: filterBadWords(inputMessage),
            createdAt: firebase.serverTimestamp(),
            uid,
            photoURL
        }

        await firebase.sendMessage(messageData)
            .then((s) => {
                setInputMessage('');
                setSendingMessage(false);
            })
            .catch((e) => console.log('error'));
    }

    const sendIconColor = () => {
        return inputMessage === "" ? '#A9A9A9' : '#25d366';

    }

    const onEnterKeyPress = (e: any) => {
        if(!e.shiftKey && e.key === 'Enter'){
                e.preventDefault();
                sendMessage(e);
        }
        if(e.shiftKey && e.key === 'Enter'){
            onShiftEnter();
        }

    }
    const renderSendIcon = () => {
        return(
            <SendIcon
                onClick={(e) => sendMessage(e)}
                color={'inherit'}
                style={{color: sendIconColor()}}
                innerRef={sendIconRef}
            />
        )
    }

    const renderLoadingIcon = () => {
        return(
            <CircularProgress size={25}/>
        );
    }

    return (
        <div className={'messageComposer_con'}>
            <div className={'messageComposer_sendingLinearProg'}>
                { sendingMessage || loader? <LinearProgress /> : ''}
            </div>
            <div className={'messageComposer_comp'}>
                <TextField
                    id="standard-multiline-flexible"
                    label="Message"
                    rowsMax={3}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={"Type a message..."}
                    onKeyPress={(e) => onEnterKeyPress(e)}
                    margin={'none'}
                    fullWidth={true}
                    multiline
                />
                <div className={'messageComposer_sendIcon'}>
                    {sendingMessage ? renderLoadingIcon() : renderSendIcon()}
                </div>
            </div>
        </div>
    );
}