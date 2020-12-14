import React from "react";
import { ChatRoom } from "./components/chatRoom";
import { SignIn } from "./components/signIn";
import "./index.scss";
import firebase from "../../modules/firebase";

export const ChatApp: React.FC = () => {
    const user = firebase.getUser();
    return(
            <div>{user ? <ChatRoom /> : <SignIn />}</div>
    );
};

