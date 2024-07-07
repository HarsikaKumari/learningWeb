import React, { useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count])

  // layout effect runs synchronously when the react shows the dom on the screen
  // layout effect is good when we want something change with the layout of the dom
  // layout effect happened before the render while the useEffect happens after the dom is rendered

  // useEffect(() => {
  //     console.log(count);
  // }, [count])

  return (
    <div>
      <button onClick={() => { setCount(c => c + 1) }}>
        Increment
      </button>
      <div>{count}</div>
    </div>
  )
}

export default UseLayoutEffect