import React, { useState } from "react";

const Navigation = () => {
  const [open, setOpnen] = useState(false);

  return (
    <header>
      <div className="menu-btn">
        <span
          className={!open ? "menu-btn-burger" : "menu-btn-burger open"}
          onClick={() => setOpnen(!open)}
        >
          {" "}
        </span>
      </div>

      <nav className="nav">
        <ul className={open ? "manu-nav" : "manu-nav open"}>
          <li className="menu-nav-item">
            <a href="index.html" className="menu-nav-link active">
              Home
            </a>
          </li>
          <li className="menu-nav-item">
            <a href="projects.html" className="menu-nav-link">
              Projects
            </a>
          </li>

          <li className="menu-nav-item">
            <a href="about.html" className="menu-nav-link">
              About Me
            </a>
          </li>
          <li className="menu-nav-item">
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
