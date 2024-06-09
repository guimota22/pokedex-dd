import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import "./styles.css";

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme__icon" onClick={toggleTheme}>
      <span></span>
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span></span>
    </button>
  );
};

export default ThemeButton;