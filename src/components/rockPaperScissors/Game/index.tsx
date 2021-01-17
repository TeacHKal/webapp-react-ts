import React, { useState, useEffect } from "react";
import { ScoreBoard } from "../ScoreBoard";
import images from './images';
import "./index.scss";
import { game as strings } from "../../../ui/constants/strings";

const GAME_TYPE = {
    NONE: 'none',
    PLAYER_VS_PLAYER: 'player_vs_player',
    PLAYER_VS_COMP: 'player_vs_computer',
};

interface IProps {
    gameType: string
    onChangeGameType: (type: string) => void;
    onScoreChange: (gameData: object) => void;
    initialScores?: {
        leftPlayerWinCount: number,
        rightPlayerWinCount: number,
    };
}

interface IPlayerScores {
    leftPlayerWinCount: number;
    rightPlayerWinCount: number;
}



export const Game: React.FC<IProps> = ( props ) =>{
    const {leftPlayerWinCount = 0, rightPlayerWinCount = 0} = {...props.initialScores};
    const [ playerScores, setPlayerScores ] = useState<IPlayerScores>({
        leftPlayerWinCount,
        rightPlayerWinCount,
    });
    const [ winText, setWinText ] = useState('');
    const [ firstPlayerPick, setFirstPlayerPick ] = useState('');
    const [ secondPlayerPicked, setSecondPlayerPicked ] = useState(false);
    const [ whoPlayText, setWhoPlayText ] = useState('');
    const [ pageLoadFirstTime, setPageLoadFirstTime ] = useState(true);

    useEffect(() => {
        setStateWhoPlayText();
    }, []);

    useEffect(() => {
        const gameData = {
            gameType: props.gameType,
            leftPlayerWinCount: playerScores.leftPlayerWinCount,
            rightPlayerWinCount: playerScores.rightPlayerWinCount,
        };
        if(!pageLoadFirstTime){
            props.onScoreChange( gameData);
        }else {
            setPageLoadFirstTime(false);
        }
    }, [playerScores.leftPlayerWinCount, playerScores.rightPlayerWinCount]);



    const setStateWhoPlayText = () => {
        if(props.gameType === GAME_TYPE.PLAYER_VS_PLAYER){
            setWhoPlayText(strings.FIRST_PLAYER_PICK);
        }
        else {
            setWhoPlayText(strings.YOU_PLAY);
        }
    };

    const goToMainMenu = () => {
        restartGame();
        props.onChangeGameType(GAME_TYPE.NONE);
    };

    const computerPick = () => {
        const picks = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return picks[randomNumber];
    };

    const whoWin = (userPick: string, otherPick: string) => {

        switch (userPick + otherPick) {
            case 'rs':
                setWinText(strings.WIN_TEXT_RS);
                win("left");
                break;
            case 'pr':
                setWinText(strings.WIN_TEXT_PR);
                win("left");
                break;
            case 'sp':
                setWinText(strings.WIN_TEXT_SP);
                win("left");
                break;
            case 'rp':
                setWinText(strings.WIN_TEXT_RP);
                win("right");
                break;
            case 'ps':
                setWinText(strings.WIN_TEXT_PS);
                win("right");
                break;
            case 'sr':
                setWinText(strings.WIN_TEXT_SR);
                win("right");
                break;
            case 'rr':
            case 'pp':
            case 'ss':
                setWinText(strings.WIN_TEXT_DRAW);
                win("draw");
                break;
            default:
                console.log('ERROR')
        }
    };

    const win = (playerWin: string) => {
        switch(playerWin) {
            case 'left':
                setPlayerScores({
                    ...playerScores,
                    leftPlayerWinCount: playerScores.leftPlayerWinCount + 1
                });
                break;
            case 'right':
                setPlayerScores({
                    ...playerScores,
                    rightPlayerWinCount: playerScores.rightPlayerWinCount + 1
                });
                break;
            case 'draw':
                break;
            default:
        }
    };

    const onPickImageClick = (playerPick: string) => {
        if(GAME_TYPE.PLAYER_VS_COMP === props.gameType){
            playWithComp(playerPick);
        }
        else{
            playVsAnotherPlayer(playerPick);
        }
    };

    const playVsAnotherPlayer = (playerPick: string) => {
        if(secondPlayerPicked) {
            whoWin(firstPlayerPick, playerPick);
            setSecondPlayerPicked(false);
            setWhoPlayText(strings.FIRST_PLAYER_PICK);
        }
        else{
            setFirstPlayerPick(playerPick);
            setSecondPlayerPicked(true);
            setWhoPlayText(strings.SECOND_PLAYER_PICK);
        }
    };

    const playWithComp = (playerPick: string) => {
        whoWin(playerPick, computerPick());
    };

    const secondPlayerName = () => {
        if(props.gameType === GAME_TYPE.PLAYER_VS_PLAYER){
            return "Not You";
        }
        return "Computer"
    };

    const restartGame = () => {
        setSecondPlayerPicked(false);
        setWinText('');
        setPlayerScores({ leftPlayerWinCount: 0, rightPlayerWinCount: 0 })
        setStateWhoPlayText();
        props.onChangeGameType(props.gameType);
    };

    const renderGameButtons = () => {
        return(
            <div className={'rpsGame_btn_settings'}>
                <button className={'rpsGame_selection_btn'} onClick={() => restartGame()}>Restart</button>
                <button className={'rpsGame_selection_btn'} onClick={() => goToMainMenu()}>GoToMainMenu</button>
            </div>
        );
    };

    const renderScoreBoard = () => {
        return(
            <ScoreBoard
                textLeft={"You"}
                textRight={secondPlayerName()}
                resultLeft={playerScores.leftPlayerWinCount}
                resultRight={playerScores.rightPlayerWinCount}
            />
        );
    };

    const renderGameImages = () => {
        return(
            <div className={"rpsGame_image_con"}>
                <div className={"rpsGame_imageDiv"}>
                    <img
                        className={"rpsGame_img"}
                        src={images.paper} alt="paper"
                        onClick={() => onPickImageClick('p')}
                    />
                </div>
                <div className={"rpsGame_imageDiv"}>
                    <img
                        className={"rpsGame_img"}
                        src={images.rock}
                        alt="rock"
                        onClick={() => onPickImageClick('r')}
                    />
                </div>
                <div className={"rpsGame_imageDiv"}>
                    <img
                        className={"rpsGame_img"}
                        src={images.scissors}
                        alt="scissors"
                        onClick={() => onPickImageClick('s')}
                    />
                </div>
            </div>
        );
    };

    return(
        <div className={'rpsGame'}>
            <h1 className={"rpsGame_gameTitle"}>{strings.TITLE}</h1>
            {renderScoreBoard()}
            <div className={'rpsGame_textCon'}><span>{ winText }</span></div>
            {renderGameImages()}
            <div className={"rpsGame_textCon"}>{whoPlayText}</div>
            {renderGameButtons()}
        </div>
    )
};
