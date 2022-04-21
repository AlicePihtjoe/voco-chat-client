import React from 'react';

function Input({placeholder}) {
    return (
        <form className="input_field">
            <label className="input_name">
                user   <input type="text" name="Chatbox" className="IF" placeholder="Type message here..." />
            </label>
            <input type="submit" value="Send" className="send_btn" />
        </form>
        );
}

export default Input;