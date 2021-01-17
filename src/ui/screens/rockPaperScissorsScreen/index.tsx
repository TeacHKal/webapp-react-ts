import React from "react";
import RockPaperScissors from "../../../components/rockPaperScissors";
import './index.scss'

export const RockPaperScissorsScreen: React.FC = () => {
    return(
        <div className={"rockPaperScissorsScreen_con"}>
            <RockPaperScissors/>
        </div>
    );
};