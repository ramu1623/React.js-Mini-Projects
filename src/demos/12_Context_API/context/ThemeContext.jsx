import { createContext,useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {/* it is just like an object 
                {
                    theme: theme,
                    toggleTheme: toggleTheme
                } 
            */
            }
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider }; // (ignore no problem) for eslint react-refresh problem we need to export at the bottom;