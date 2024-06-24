import React, {useState} from 'react';

function StateHook() {
  const [state, setState] = useState({count: 0, theme:'black'});
  const count = state.count;
  const theme = state.theme;


  function decrementCount() {
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1 };
    })
  }

  function incrementCount() {
    setState(prevState => {
      return{theme:'red', count: prevState.count + 1}
    })
  }

  return (
    <div>
        <button onClick = {decrementCount}> - </button>
        <span> {count} </span>
        <span> {theme} </span>
        <button onClick = {incrementCount}> + </button>
    </div>
  )
}

export default StateHook;