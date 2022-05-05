import React, {useEffect, useState} from 'react';
import './App.css';
import Chatbox from "./components/chat/Chatbox";
import Input from "./components/Input.jsx";
import data from "./Data.json";

import {disconnectSocket, connectToServer, socket} from './socket-service.js'

function App() {

    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(data);

    const handleSubmit = () => {
        const chat = {
            message,
                username: author,
        }
        socket.send(JSON.stringify(chat));



        socket.onmessage = (websocketData) => {
            const chatObject = JSON.parse(websocketData.data);
            setMessages([...messages, {
                message: chatObject.message,
                username: chatObject.username,
                date: chatObject.date,
            }]);
        }


        setMessage('');


        localStorage.setItem('chats', JSON.stringify(...messages));


    };

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

               <Chatbox messages={messages}/>
               <Input placeholder="Author" onChange={setAuthor} value={author}/>
               <Input className="inputBottom" placeholder="Message" onChange={setMessage} value={message}/>
               <input type="submit" value="Send" className="send_btn" onClick={handleSubmit} />
           </div>


       </div>
   );



}

export default App;

