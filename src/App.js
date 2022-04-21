import React, {useEffect} from 'react';
import './App.css';
import Chatbox from "./components/chat/Chatbox";
import Input from "./components/Input.jsx";

import { disconnectSocket, connectToServer } from './socket-service.js'

function App() {
    useEffect(() => {

        connectToServer();
        return () => {
            disconnectSocket();
        }
    }, []);

   return(
       <div className="background">
           <div className="voco_heading">VOCO Chat</div>
           <div className="chatContainer">

               <Chatbox/>
               <Input/>
           </div>


       </div>
   );



}

export default App;

