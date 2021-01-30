import React from 'react';
import './App.css';
import { AppBody } from "./ui/screens/appBody";
import {AppHeader} from "./ui/screens/appHeader";
import {AppFooter} from "./ui/screens/appFooter";

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
