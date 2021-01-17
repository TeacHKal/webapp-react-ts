import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ChatApp} from "../chatapp";

function RouterSwitch() {
    return (
        <Switch>
            <Route exact path="/chatapp">
                <ChatApp height={550}/>
            </Route>
            <Route exact path="/">

            </Route>
        </Switch>
    );
}

export default RouterSwitch;