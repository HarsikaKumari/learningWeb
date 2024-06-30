import React, { useReducer, useState } from 'react'
import Todo from "./Todo";

export const ACTION = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo",
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payLoad.name)]

        case ACTION.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payLoad.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })

        case ACTION.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payLoad.id)

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
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}

export default ReducerHookEg