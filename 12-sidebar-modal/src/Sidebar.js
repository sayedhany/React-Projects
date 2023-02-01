import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const data = useGlobalContext();
  return (
    <aside className={`sidebar ${data.isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <a href="/">
          <img src={logo} alt="coding addict" className="logo" />
        </a>
        <button className="close-btn" onClick={() => data.closeSidebar()}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a target="_blank" href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
