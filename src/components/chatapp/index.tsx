import React from "react";
import firebase from "../../modules/firebase";
import { SignIn } from "./components/signIn";

import "./index.scss";
import {ChatHeader} from "./components/chatHeader";
import {ChatMsgWin} from "./components/chatMsgWin";
import {MessageComposer} from "./components/messageComposer";
import backgroundImage from "./resourses/images/chatAppBackground.png";

interface IProps{
    width?: number;
    height?: number;
    fontSize?: number;
}

export const ChatApp: React.FC<IProps> = (props) => {
    const user = firebase.getUser();

    const {height, width, fontSize} = props
    const style={
        height,
        width,
        fontSize,
        backgroundImage: `url(${backgroundImage})`
    }

    const renderChatRoom = () => {
        return(
            <div style={style} className={'chatApp_con'}>
                { <ChatHeader/> }
                { <ChatMsgWin/> }
                { <MessageComposer/> }
            </div>
        )
    }

    const renderChatRoomNullScreen = () => {
        return (
            <div style={style} className={'chatApp_con'}>
                { <ChatHeader/> }
                { <SignIn /> }
                { <MessageComposer/> }
            </div>)
    }

    return user ? renderChatRoom() : renderChatRoomNullScreen();
};

