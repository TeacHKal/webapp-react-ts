import React from 'react';
import './App.css';
import { ChatApp} from "./components/chatapp";
import { Header } from './screens/header';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header/>
        <ChatApp width={350} height={600}/>
      </div>
    </div>
  );
}

export default App;
