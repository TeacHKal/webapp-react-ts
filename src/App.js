import React from 'react';
import './App.css';
import { ChatApp} from "./components/chatapp";
import { Header } from './screens/header';
import { Footer } from './screens/footer';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <ChatApp width={300} height={550}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
