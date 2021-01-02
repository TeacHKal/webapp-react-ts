import React from 'react';
import './App.css';
import { AppBody } from "./screens/appBody";
import {AppHeader} from "./screens/appHeader";
import {AppFooter} from "./screens/appFooter";

function App() {
  return (
    <div className="App">
      <div className="App-body">
          <AppHeader />
          <AppBody />
          <AppFooter />
      </div>
    </div>
  );
}

export default App;
