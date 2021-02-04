import React, { useRef, useState } from "react";
import firebaseModule from "../../modules/FirebaseModule";
import { ChatHeader } from "./components/chatHeader";
import { ChatMsgWin } from "./components/chatMsgWin";
import { MessageComposer } from "./components/messageComposer";
import backgroundImage from "./resourses/images/chatAppBackground.png";
import { Button } from "../baseComponents/button";
import language from '../../config/languages/';
import "./index.scss";

interface IProps {
    width?: number;
    height?: number;
    fontSize?: number;
}

export const ChatApp: React.FC<IProps> = (props) => {
    const [ isSingingIn, setIsSingingIn ] = useState(false);
    const chatMsgWinRef = useRef<any>(null);
    const strings = language.strings.chatApp;
    const userHook = firebaseModule.getUser();
    const user = firebaseModule.getUser();
    const auth = firebaseModule.auth();

    const { height, width, fontSize } = props
    const style = {
        height,
        width,
        fontSize,
        backgroundImage: `url(${ backgroundImage })`
    }

    const signOut = () => {
        firebaseModule.signOut().then();
    }

    const onSignInClick = () => {
        setIsSingingIn(true);
        firebaseModule.signInWithGoogle()
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
                    text={ strings.signIn }
                    onClick={ () => onSignInClick() }
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
                <ChatMsgWin
                    loading={ isSingingIn }
                    ref={ chatMsgWinRef }
                    auth={ auth  }
                />
                : renderSignInBtn()
        );
    }

    return (
        <div style={ style } className={ 'chatApp_con' }>
            { <ChatHeader
                signOut={ () => signOut() }
                user={ user }
            /> }
            { renderChatMsgWin() }
            { <MessageComposer
                loader={ isSingingIn }
                onShiftEnter={ (): any => onComposerShiftEnter() }
                isInputDisabled={ !userHook }
            /> }
        </div>
    )
};

