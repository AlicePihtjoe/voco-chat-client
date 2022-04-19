import React from 'react';

function Input({placeholder}) {
    return (
        <form class="input_field">
            <label class="input_name">
                user   <input type="text" name="Chatbox" class="IF" placeholder="Type message here..." />
            </label>
            <input type="submit" value="Send" class="send_btn" />
        </form>
        );
}

export default Input;