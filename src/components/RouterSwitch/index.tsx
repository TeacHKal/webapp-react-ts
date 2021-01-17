import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ChatApp} from "../chatapp";
import {RockPaperScissorsScreen} from "../../ui/screens/rockPaperScissorsScreen";

function RouterSwitch() {
    return (
        <Switch>
            <Route exact path="/chatapp">
                <ChatApp height={550}/>
            </Route>
            <Route exact path="/rps">
                <RockPaperScissorsScreen/>
            </Route>
        </Switch>
    );
}

export default RouterSwitch;