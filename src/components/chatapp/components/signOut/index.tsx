import React from "react";
import firebase from "../../../../modules/firebase";
import {Button} from "@material-ui/core";

export const SignOut: React.FC = () => {

    return (
        <div>
            <Button
                onClick={() => firebase.signOut()}
                variant="contained"
                color="secondary"
                size="small"
            >
                Sign Out
            </Button>
        </div>
    );
}