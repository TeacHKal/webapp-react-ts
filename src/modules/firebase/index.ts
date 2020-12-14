import firebase from "firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({ ...firebaseConfig })

const firestore = firebase.firestore();

const messagesRef = firestore.collection('messages');
const query = messagesRef.orderBy('createdAt', 'desc').limit(30);

const auth = () => firebase.auth();

const MessageArr = () => {
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