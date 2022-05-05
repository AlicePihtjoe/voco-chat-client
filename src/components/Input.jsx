import React from 'react';

function Input({placeholder, onChange, value}) {
    return (
        <form className="input_field">
            <label className="input_field">
              user  <input type="text" name="Chatbox" className="IF" placeholder={placeholder} value={value}
                           onChange = {(e) => onChange(e.target.value)} />
            </label>

        </form>
        );
}

export default Input;