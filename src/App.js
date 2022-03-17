import React from 'react';
import './App.css';
import './components/chat/Chatbox.jsx';
import './components/chat/Kaart/kaart2.jsx';
import Chatbox from "./components/chat/Chatbox";

function App() {
   return(
       <div className="background">
           <div className="voco_heading">VOCO Chat</div>
           <div className="chatContainer">
             <Chatbox/>
           </div>

       </div>
   )



}

export default App;

