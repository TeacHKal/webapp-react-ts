import React from "react";
import "./index.scss";

interface IProps {
    resultLeft: number;
    resultRight: number;
    textLeft: string;
    textRight: string;
}

export const ScoreBoard: React.FC<IProps> = ({resultLeft, resultRight, textLeft, textRight}) => {

    const getScoreClassColor = (type: string) => {
        if (resultLeft === resultRight) return "scoreBoard_clr-yellow";

        if (type === 'left' && resultLeft > resultRight) {
            return 'scoreBoard_clr-green'
        } else if (type === 'left' && resultLeft < resultRight) {
            return 'scoreBoard_clr-red'
        }

        if (type === 'right' && resultLeft < resultRight) {
            return 'scoreBoard_clr-green'
        } else {
            return 'scoreBoard_clr-red'
        }
    };

    return (
        <div className={"scoreBoard_con"}>
            <div className={"scoreBoard_text scoreBoard_scTextLeft"}>{textLeft}</div>
            <div className={"scoreBoard_result_con"}>
                <div className={"scoreBoard_result"}>
                    <span className={getScoreClassColor('left')}>{resultLeft}</span>
                </div>
                <div className={"scoreBoard_dotDivider"}><span>:</span></div>
                <div className={"scoreBoard_result"}>
                    <span className={getScoreClassColor('right')}>{resultRight}</span>
                </div>
            </div>
            <div className={"scoreBoard_text scoreBoard_scTextRight"}>{textRight}</div>
        </div>
    )
};