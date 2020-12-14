import React from "react";
import firebase from "../../../../modules/firebase";
import {Button} from "@material-ui/core";

export const SignIn: React.FC = () => {

    return (
        <div>
            <Button
                onClick={() => firebase.signInWithGoogle()}
                variant="contained"
                color="primary"
                size="small"
            >
                Sign In
            </Button>
        </div>
    );
}