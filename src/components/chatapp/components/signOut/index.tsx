import React from "react";
import firebase from "../../../../modules/firebase";

export const SignOut: React.FC = () => {

    return (
        <div>
            <button onClick={() => firebase.signOut()}>Sign Out</button>
        </div>
    );
}