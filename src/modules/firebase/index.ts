import firebase from "firebase/app";
import {useCollectionData} from "react-firebase-hooks/firestore";
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({ ...firebaseConfig })

const firestore = firebase.firestore();

const messagesRef = firestore.collection('messages');

const auth = () => firebase.auth();

const MessageArr = (msgLimit: number = 30) => {
    const query = messagesRef.orderBy('createdAt', 'desc').limit(msgLimit);
    const  [messages] = useCollectionData(query, {idField: 'id'}); // Hook
    return messages;
}

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider)
}

const signOut = () => {
    return auth().signOut();
}

const GetUser = () => {
    const [user] = useAuthState(auth());
    return user;
}

const sendMessage =  async (messageData: any) => {
      return messagesRef.add({...messageData})
}

const serverTimestamp = () => {
    return firebase.firestore.FieldValue.serverTimestamp();
}

const getCurrentUser = () => {
    return auth().currentUser;
}

export default {
    auth,
    MessageArr,
    signInWithGoogle,
    signOut,
    getUser: GetUser,
    sendMessage,
    serverTimestamp,
    getCurrentUser,
}