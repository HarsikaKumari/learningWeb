import React, { useState, createContext } from 'react';
import  ClassContext from './ClassContext';
import FunctionContext from "./FunctionContext";

export const ThemeContext = createContext();

const ContextHook = () => {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContext />
            <ClassContext />
        </ThemeContext.Provider>
    )
}

export default ContextHook