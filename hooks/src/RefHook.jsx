import React, { useState, useRef } from 'react'

function RefHook() {
    const [name, setName] = useState("")
    // const renderCount = useRef(0)
    //{current : 0}
    const inputRef = useRef()
    
    // useEffect(() => {
        // renderCount.current = renderCount.current + 1
    // })

    function focus() {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <div> My name is {name}</div>
            {/* <div> I render it {inputRef.current} times.</div> */}
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default RefHook;