import React, { useState, useTransition } from 'react'

const UseTransition = () => {
    const[input, setInput] = useState("");
    const[list, setList] = useState([]);
    const[isPending, startTransition] = useTransition();

    const LIST_SIZE = 200;

    function handleChange(e) {
        setInput(e.target.value);
        startTransition(() => {
            const a = [];
            for (let i = 0; i < LIST_SIZE; i++) {
               a.push(e.target.value);           
            }
            setList(a);
        })
    }
  return (
    <div>
        <input type='name' value={input} onChange={handleChange}/> 
        { isPending ? "Loading..." :
            list.map((item, index) => {
                return (<div key={index}>{item}</div>);
            }
        )}
    </div>
  )
}

export default UseTransition