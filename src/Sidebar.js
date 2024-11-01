import React, { useState } from "react";
import {
  FaCompass,
  FaBriefcase,
  FaProjectDiagram,
  FaServicestack,
  FaInfoCircle,
} from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-button" onClick={toggleSidebar}>
        {isCollapsed ? "=" : "<"}
      </button>

      <div className="profile">
        <h2>{isCollapsed ? "AO" : "Atul Oli"}</h2>
        <p>{isCollapsed ? "" : "Full-Stack Developer"}</p>
      </div>

      <nav className="navigation">
        <a href="#explore">
          <FaCompass className="icon" />
          {!isCollapsed && <span>Explore</span>}
        </a>
        <a href="#experience">
          <FaBriefcase className="icon" />
          {!isCollapsed && <span>Experience</span>}
        </a>
        <a href="#projects">
          <FaProjectDiagram className="icon" />
          {!isCollapsed && <span>Projects</span>}
        </a>
        <a href="#services">
          <FaServicestack className="icon" />
          {!isCollapsed && <span>Services</span>}
        </a>
        <a href="#about">
          <FaInfoCircle className="icon" />
          {!isCollapsed && <span>About</span>}
        </a>
      </nav>

      <div className="resources">
        <h4>{!isCollapsed && "Resources"}</h4>
        <a href="#feed">
          <FaCompass className="icon" />
          {!isCollapsed && <span>Feed</span>}
        </a>
        <a href="#thoughts">
          <FaBriefcase className="icon" />
          {!isCollapsed && <span>Thoughts</span>}
        </a>
        <a href="#stack">
          <FaProjectDiagram className="icon" />
          {!isCollapsed && <span>Stack</span>}
        </a>
      </div>

      <div className="connect">
        <h4>{!isCollapsed && "Connect"}</h4>
        <a href="#contact">
          <FaInstagram className="icon" />
          {!isCollapsed && <span>Instagram</span>}
        </a>
        <a href="#peerlist">
          <FaTwitter className="icon" />
          {!isCollapsed && <span>Twitter</span>}
        </a>
        <a href="#linkedin">
          <FaLinkedin className="icon" />
          {!isCollapsed && <span>LinkedIn</span>}
        </a>
        <a href="#github">
          <FaGithub className="icon" />
          {!isCollapsed && <span>GitHub</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
