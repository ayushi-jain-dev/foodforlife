import React from "react";
import "../components/sidebar.css";
import logo from "../assets/images/Logo.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidenav">
        <img src={logo} alt="Beauty Website Logo" />
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/info">Information</a>
        <a href="/guide">Guide</a>
      </div>
    </>
  );
};

export default Sidebar;
