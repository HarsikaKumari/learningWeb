import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useUpdateTheme() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ Children }) {
    const [theme, setTheme] = useState(true);

    function toggleTheme() {
        setTheme(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {Children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
