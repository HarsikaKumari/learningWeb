import React, { useEffect, useState } from 'react'

function EffectHook() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    console.log("render");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
            .catch(() => setItems([]));
            
    }, [resourceType]) //the second param ensure the code is executed when this is changed.

    return (
        <div>
            <div>
                <button onClick={() => { setResourceType('posts') }}>Posts</button>
                <button onClick={() => { setResourceType('users') }}>Users</button>
                <button onClick={() => { setResourceType('comments') }}>Comments</button>
            </div>
            <h1> {resourceType} </h1>
            {
                items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }
        </div>
    )
}

export default EffectHook;