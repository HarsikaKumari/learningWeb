import React, { useState } from 'react'

function RefHook() {
    const [name, setName] = useState("")

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div> My name is {name}</div>
        </div>
    )
}

export default RefHook;