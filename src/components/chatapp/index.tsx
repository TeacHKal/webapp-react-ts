import React from "react";
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseConfig } from "../../config/firebase";
import { ChatRoom } from "./components/chatRoom";
import { SignIn } from "./components/signIn";
import "./index.scss";

firebase.initializeApp({ ...firebaseConfig })

const auth = firebase.auth();

export const ChatApp: React.FC = () => {
    const [user] = useAuthState(auth);

    return(
            <div>{user ? <ChatRoom /> : <SignIn />}</div>
    );
};

