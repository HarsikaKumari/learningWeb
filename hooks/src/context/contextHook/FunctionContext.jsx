import React from 'react';
import { useTheme, useUpdateTheme } from "./ThemeContext"

function FunctionContext() {
    const theme = useTheme();
    const toggleTheme = useUpdateTheme();
    const themeStyle = {
        background: theme ? "#333" : "#CCC",
        color: theme ? "#CCC" : "#333",
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyle}>Function theme</div>
        </>
    )
}

export default FunctionContext