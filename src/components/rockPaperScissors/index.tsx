import React, { useState} from "react";
import { Selection } from "./Selection";
import { Game } from "./Game";
import { rockPaperScissors as strings } from '../../ui/constants/strings'
import './index.scss'

const GAME_TYPE = {
    NONE: 'none',
    PLAYER_VS_PLAYER: 'player_vs_player',
    PLAYER_VS_COMP: 'player_vs_computer',
};

const RockPaperScissors: React.FC = () => {
    const [ gameType, setGameType ] = useState(GAME_TYPE.NONE);



    const selectionChange = (type: string) => {
        setGameType(type);
    };



    const selectionData = [
        {
            text: strings.PLAYER_VS_PLAYER,
            type: GAME_TYPE.PLAYER_VS_PLAYER,
        },
        {
            text: strings.PLAYER_VS_COMP,
            type: GAME_TYPE.PLAYER_VS_COMP,
        },
    ];

    return(
        <div className={"rps_con"}>
            {gameType === GAME_TYPE.NONE &&
            <Selection
                onSelectionChange={selectionChange}
                data={selectionData}
            />
            }
            {gameType !== GAME_TYPE.NONE &&
            <Game
                gameType={gameType}
                onChangeGameType={(gameType) => selectionChange(gameType)}
            />
            }
        </div>
    );
};

export default RockPaperScissors;

