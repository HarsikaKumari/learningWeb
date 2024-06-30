import React from 'react'
import { ACTION } from "./ReducerHookEg"

const Todo = ({ todo, dispatch }) => {
  return (
    <div>

      <span style={{ color: todo.complete ? 'red' : 'black' }}>
        {todo.name}
      </span>

      <button onClick={() => { dispatch({ type: ACTION.TOGGLE_TODO, payLoad: { id: todo.id } }) }}>Toggle</button>
      <button onClick={() => { dispatch({ type: ACTION.DELETE_TODO, payLoad: { id: todo.id } }) }}>Delete</button>

    </div>
  )
}

export default Todo;
