import React from "react";
import { ChatApp } from "../../../components/chatapp";
//import "./index.scss";

export const ChatAppScreen: React.FC = () => {
    return(
        <div className={"chatApp_con"}>
            <ChatApp />
        </div>
    );
};
