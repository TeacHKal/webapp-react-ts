import React from "react";
import firebase from "../../../../modules/firebase";
import {Button} from "@material-ui/core";

export const SignOut: React.FC = () => {
    const user = firebase.getUser();
    console.log('user', user);
    return (
        <div>
            <Button
                onClick={() => firebase.signOut()}
                variant="contained"
                color="secondary"
                size="small"
                disabled={!user}
            >
                Sign Out
            </Button>
        </div>
    );
}