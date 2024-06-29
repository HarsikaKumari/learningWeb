import React from 'react';
import FunctionContext from "./FunctionContext";
import { ThemeProvider } from './ThemeContext'

const ContextHook = () => {
    return (
        <ThemeProvider>
            <FunctionContext />
        </ThemeProvider>
    )
}

export default ContextHook