import React, { useState } from 'react'
import List from './List'


const CallbackHook = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const theme = {
        background: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333",
    }

    function getItems() {
        return [number, number + 1, number + 2]
    }

    return (
        <div style={theme}>
            <input
                type='number'
                value={number}
                onChange={(e) => { setNumber(parseInt(e.target.value)) }}
            /> 
            <br />
            <button onClick={() => { setDark(prevValue => !prevValue) }}>
                Toggle theme
            </button> 
            <br />
            <List getItems={getItems} />
        </div>
    )
}

export default CallbackHook