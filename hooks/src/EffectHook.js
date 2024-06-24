import React, {useEffect, useState} from 'react'

function EffectHook() {

    const [resourceType, setResourceType] = useState('post');
    
    console.log("render");

    useEffect(() => {
        console.log("resource Type")
    }, [resourceType]) //the second param ensure the code is executed when this is changed.

  return (
    <div>
        <div>
        <button onClick={()=>{ setResourceType('post')}}> posts </button>
        <button onClick={()=>{ setResourceType('User')}}> Users </button>
        <button onClick={()=>{ setResourceType('Comment')}}> Comments </button>
        </div>
        <h1> {resourceType} </h1>
    </div>
  )
}

export default EffectHook;