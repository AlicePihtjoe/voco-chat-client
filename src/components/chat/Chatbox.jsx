import React from 'react';
import Kaart2 from "./Kaart/kaart2";
import data from '../../Data.json';



function Chatbox(props) {
    return (
        <div>

            {data.map((item) => {
            return(<Kaart2
            message={item.message}
            username={item.username}
            date={item.date}/>)
            })}

        </div>


    );
}

export default Chatbox;