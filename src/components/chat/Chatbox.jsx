import React from 'react';
import Kaart2 from "./Kaart/kaart2";
import data from '../../Data.json';
import {useState} from "react";
import {useEffect} from "react";



function Chatbox({messages}) {

    return (
        <div>

            {messages.map((item) => {
            return(<Kaart2
            message={item.message}
            username={item.username}
            date={item.date} />)
            })}

        </div>


    );
}

export default Chatbox;