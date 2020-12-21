import React, {useRef, useState} from "react";
import { SignIn } from "./components/signIn";
import firebase from "../../modules/firebase";
import { ChatHeader } from "./components/chatHeader";
import { ChatMsgWin } from "./components/chatMsgWin";
import { MessageComposer } from "./components/messageComposer";
import "./index.scss";
import backgroundImage from "./resourses/images/chatAppBackground.png";
import {Button} from "../baseComponents/button";
import language from '../../config/languages/';

interface IProps{
    width?: number;
    height?: number;
    fontSize?: number;
}

export const ChatApp: React.FC<IProps> = (props) => {
    const [isSingingIn, setIsSingingIn] = useState(false);
    const chatMsgWinRef = useRef<any>(null);
    const userHook = firebase.getUser();
    const strings = language.strings.chatApp;

    const {height, width, fontSize} = props
    const style={
        height,
        width,
        fontSize,
        backgroundImage: `url(${backgroundImage})`
    }

    const onSignInClick = () => {
        setIsSingingIn(true);
        firebase.signInWithGoogle()
            .then(() => setIsSingingIn(false))
            .catch();
    }

    const onComposerShiftEnter = () => {
        chatMsgWinRef && chatMsgWinRef.current && chatMsgWinRef.current.slideToBottomTimeOut();
    }

    const renderSignInBtn = () => {
        return (
            <div>
                <Button
                    text={strings.signIn}
                    onClick={() => onSignInClick()}
                    variant='contained'
                    color="primary"
                    size="small"
                >
                </Button>
            </div>
        );
    }

    const renderChatMsgWin = () => {
        return (
            isSingingIn || userHook ?
                <ChatMsgWin loading={isSingingIn} ref={chatMsgWinRef}/>
                : renderSignInBtn()
        );
    }

    return (
        <div style={style} className={'chatApp_con'}>
            {<ChatHeader/>}
            {renderChatMsgWin()}
            {<MessageComposer
                loader={isSingingIn}
                onShiftEnter={(): any => onComposerShiftEnter()}
                isInputDisabled={!userHook}
            />}
        </div>
    )
};

