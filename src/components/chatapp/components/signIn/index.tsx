import React from "react";
import {Button} from "@material-ui/core";

interface IProps {
    onClick: () => void;
}

export const SignIn: React.FC<IProps> = (props) => {
    return (
        <div>
            <Button
                onClick={() => props.onClick()}
                variant="contained"
                color="primary"
                size="small"
            >
                Sign In
            </Button>
        </div>
    );
}