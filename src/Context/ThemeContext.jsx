import { createContext, useState } from "react";

//Creamos un contexto
export const ThemeContext = createContext()

export function ThemeContextProvider ({children}){
    const [theme, setTheme] = useState('light')

    const providerValues = {
        theme: theme,
        nombre_favorito: 'pepe'
    }
    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    )
}