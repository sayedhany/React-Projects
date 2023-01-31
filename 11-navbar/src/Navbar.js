import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const linksRef = useRef(null);
  const LinksContainer = useRef(null);
  useEffect(() => {
    const linksHieght = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHieght);
    if (showLinks) {
      LinksContainer.current.style.height = `${linksHieght}px`;
    } else {
      LinksContainer.current.style.height = "0px";
    }
  }, [showLinks]);
  // console.log(showLinks);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={LinksContainer}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((soc) => {
            const { id, url, icon } = soc;
            return (
              <li key={id}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
