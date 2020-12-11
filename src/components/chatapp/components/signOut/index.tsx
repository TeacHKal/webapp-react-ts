import React from "react";
import firebase from "firebase";
import 'firebase/auth';

export const SignOut: React.FC = () => {

    const auth = firebase.auth();

    const signOut = () => {
            auth.signOut();
    }

    return (
        <div>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
}