import React from "react";

import 'firebase/auth';

import { ChatHeader } from "../chatHeader";
import './index.scss';
import backgroundImage from "../../resourses/images/chatAppBackground.png"
import { MessageComposer } from "../messageComposer";
import { ChatMsgWin } from '../chatMsgWin';

const style={
    backgroundImage: `url(${backgroundImage})`
}

export const ChatRoom: React.FC = () => {
    return (
        <div style={style} className={'chatRoom_con'}>
            { <ChatHeader/> }
            { <ChatMsgWin/> }
            { <MessageComposer/> }
        </div>
    );
}