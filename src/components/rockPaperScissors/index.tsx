import React, {useEffect, useState} from "react";
import { Selection } from "./Selection";
import { Game } from "./Game";
import { rockPaperScissors as strings } from '../../ui/constants/strings'
import './index.scss'

const RockPaperScissors: React.FC = () => {
    const [ gameType, setGameType ] = useState("");
    const [ initializeGameFlag, setInitializeGameFlag] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        setInitializeGameFlag(true);
    };

    const selectionChange = (type: string) => {
        setGameType(type);
    };

    const GAME_TYPE = {
        NONE: 'none',
        PLAYER_VS_PLAYER: 'player_vs_player',
        PLAYER_VS_COMP: 'player_vs_computer',
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
    const onGameScoreChange = (gameData: any) => {
        const data = {
            gameType: gameData.gameType,
            leftPlayerWinCount: gameData.leftPlayerWinCount,
            rightPlayerWinCount: gameData.rightPlayerWinCount,
        };
    };

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
                onScoreChange={(gameData: object) => onGameScoreChange(gameData)}
                //initialScores={initializeGame()}
            />
            }
        </div>
    );
};

export default RockPaperScissors;

