import React, { useReducer, useState } from 'react'

const ACTION = {
    ADD_TODO: "add_todo",
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payLoad.name)]
        default:
        return todos
    }
}


function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

const ReducerHookEg = () => {
    const [name, setName] = useState("")
    const [todos, dispatch] = useReducer(reducer, [])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTION.ADD_TODO, payLoad: { name: name } })
        setName('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </form>
        </div>
    )
}

export default ReducerHookEg