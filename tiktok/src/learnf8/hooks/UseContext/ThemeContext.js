import { createContext, useState } from "react";

const ThemeContext = createContext();


function ThemeProvider( {children} ) {
    const [ theme, setTheme ] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const newObj = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value= {newObj}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}