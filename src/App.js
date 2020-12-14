import React from 'react';
import './App.css';
import { ChatApp} from "./components/chatapp";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ChatApp width={350} height={600}/>
      </header>
    </div>
  );
}

export default App;
