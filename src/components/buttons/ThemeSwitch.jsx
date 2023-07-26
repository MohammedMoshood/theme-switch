import React, { useContext } from "react";
import "./Switch.css";
import { Moon } from "iconsax-react";
import ThemeContext from "../../contexts/Context";

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div onClick={() => toggleTheme()} className="switch-container">
      <div className="rectangle"></div>
      <div className={`ellipse ${theme === "dark-theme" && "ellipse-i"}`}>
        <Moon size="10" variant="Bold" />
      </div>
    </div>
  );
};

export default ThemeSwitch;
