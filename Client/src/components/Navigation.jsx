import React, { useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
  const [open, setOpnen] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <header>
      <div className="menu-btn noDisp">
        <span
          className={!open ? "menu-btn-burger" : "menu-btn-burger open"}
          onClick={() => setOpnen(!open)}
        ></span>
      </div>

      <nav className="nav noDisp">
        <ul className={!open ? "manu-nav" : "manu-nav open"}>
          <li className={!open ? "menu-nav-item" : "menu-nav-item open"}>
            <a href="index.html" className="menu-nav-link active">
              Home
            </a>
          </li>
          <li className={!open ? "menu-nav-item" : "menu-nav-item open"}>
            <a href="projects.html" className="menu-nav-link">
              Projects
            </a>
          </li>

          <li className={!open ? "menu-nav-item" : "menu-nav-item open"}>
            <a href="about.html" className="menu-nav-link">
              About Me
            </a>
          </li>
          <li className={!open ? "menu-nav-item" : "menu-nav-item open"}>
            <a href="contact.html" className="menu-nav-link">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
