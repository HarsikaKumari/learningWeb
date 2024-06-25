import React, { useState, useMemo } from 'react'

function MemoHook() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(true)
    const doubleNumber = useMemo(() => slowFun(number), [number])
    const theme = {
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <div>
            <input type='number' value={number} onChange={e => {
                setNumber(parseInt(e.target.value));
            }} /> <br />

            <button onClick={() => setDark(prev => !prev)}>Change theme</button>

            <div style={theme}>{doubleNumber}</div>
        </div>
    )
}

function slowFun(num) {
    console.log("Calling slow function")
    for (let i = 0; i <= 10000000; i++) { }
    return num * 2
}

export default MemoHook;