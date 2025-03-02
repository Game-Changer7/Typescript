import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeMode: React.FC = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }
  return (
    <div className={`body ${context.theme === "light" ? "light" : "dark"}`}>
      <button
        onClick={() =>
          context.setTheme(context.theme === "light" ? "dark" : "light")
        }
        style={{
          padding: "0.5rem 1.5rem",
          outline: "none",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {context.theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ThemeMode;
