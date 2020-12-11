import React from "react";
import firebase from "firebase";
import 'firebase/auth';

export const SignIn: React.FC = () => {

    const auth = firebase.auth();

    const signInWithGoogle = () => {
       const provider = new firebase.auth.GoogleAuthProvider();
       auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()}>Sign In</button>
        </div>
    );
}