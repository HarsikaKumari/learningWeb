import React, { useContext } from 'react'
import { ThemeContext } from "./ContextHook"

function FunctionContext() {
    const theme = useContext(ThemeContext);
    const themeStyle = {
        background: theme ?"#333": "#CCC",
        color: theme ?"#CCC": "#333",
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div style={themeStyle}>Function theme</div>
    )
}

export default FunctionContext