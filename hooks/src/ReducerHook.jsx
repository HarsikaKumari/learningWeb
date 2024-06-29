import React, { useReducer } from 'react'

const initialState = 5;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return { count: initialState }
    default:
      return state
  }
}

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: initialState })

  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }

  function reset() {
    dispatch({ type: 'reset' })
  }

  return (
    <div>
      <button onClick={decrement}> - </button>
      <span>{state.count}</span>
      <button onClick={increment}> + </button> <br />
      <button onClick={reset}> Reset </button>
    </div>
  )
}

export default ReducerHook