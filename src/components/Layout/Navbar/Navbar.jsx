import React from "react";
import "./Nav.css";
import ThemeSwitch from "../../buttons/ThemeSwitch";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <span className="name"> WALEVARIES </span>
        <div>
          <ThemeSwitch/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
