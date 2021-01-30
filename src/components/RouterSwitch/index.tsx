import React from "react";
import { Route, Switch } from 'react-router-dom';
import { ChatApp } from "../chatapp";
import { RockPaperScissorsScreen } from "../../ui/screens/rockPaperScissorsScreen";
import { TestScreen } from "../../ui/screens/testScreen";

function RouterSwitch() {
    return (
        <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/chatapp">
                <ChatApp height={ 550 }/>
            </Route>
            <Route exact path="/rps">
                <RockPaperScissorsScreen/>
            </Route>
            <Route exact path="/test">
                <TestScreen/>
            </Route>
        </Switch>
    );
}

export default RouterSwitch;