import React, { useReducer } from 'react'

const initialState = 5;
const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    case ACTION.RESET:
      return { count: initialState }
    default:
      return state
  }
}

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: initialState })

  function increment() {
    dispatch({ type: ACTION.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTION.DECREMENT })
  }

  function reset() {
    dispatch({ type: ACTION.RESET })
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