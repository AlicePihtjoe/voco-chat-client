import React from 'react';

function Kaart2({message, username, date}) {
    return (
        <div className="chatBox">
            <p>{message}</p>
            <p>{username}</p>
            <p>{date}</p>
        </div>
    );
}

export default Kaart2;