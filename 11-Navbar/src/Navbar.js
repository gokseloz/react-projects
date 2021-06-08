import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
console.log(social);

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const linksheight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      linksContainerRef.current.style.height = `${linksheight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [show]);

  return (
    <>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars onClick={() => setShow(!show)} />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a href={socialLink.url} target="_blank">
                  {socialLink.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
