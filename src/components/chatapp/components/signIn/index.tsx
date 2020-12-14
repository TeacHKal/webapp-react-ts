import React from "react";
import firebase from "../../../../modules/firebase";

export const SignIn: React.FC = () => {

    return (
        <div>
            <button onClick={() => firebase.signInWithGoogle()}>Sign In</button>
        </div>
    );
}