
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                padding: "20px",
                textAlign: "center",
                height: "100vh",
            }}
        >
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}