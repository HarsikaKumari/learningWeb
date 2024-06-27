import React, { useState, useRef, useEffect } from 'react'

function RefHook() {
    const [name, setName] = useState("")
    // const renderCount = useRef(0)
    //{current : 0}
    // const inputRef = useRef()
    const prevName = useRef('')
    
    // useEffect(() => {
        // renderCount.current = renderCount.current + 1
    // })

    useEffect(() => {
        prevName.current = name
    }, [name])

    // function focus() {
    //     inputRef.current.focus()
    // }

    return (
        <div>
            {/* ref={inputRef} */}
            <input value={name} onChange={(e) => setName(e.target.value)} />  
            <div> My name is {name} and previously it used to be {prevName.current}</div>
            {/* <div> I render it {inputRef.current} times.</div> */}
            {/* <button onClick={focus}>Focus</button> */}
        </div>
    )
}

export default RefHook;