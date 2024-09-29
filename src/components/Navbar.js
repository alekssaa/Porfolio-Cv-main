import React from "react";
import { links } from "../data/data.js";
import { Link, NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { useProContext } from "../context/contex";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const { sidebarOpen, openSidebar, closeSidebar } = useProContext();
  let menuRef = useRef();
  useEffect(() => {
    let hendler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", hendler);
    document.addEventListener("scroll", hendler);

    return () => {
      document.removeEventListener("mousedown", hendler);
      document.removeEventListener("scroll", hendler);
    };
  });
  const handleClick = () => {
    closeSidebar();
  };
  return (
    <header ref={menuRef} className="header">
      <h3 className="logo">Aleksandar Ilisić</h3>
      {sidebarOpen ? (
        <i>
          <IoCloseSharp className="menu-icon" onClick={closeSidebar} />{" "}
        </i>
      ) : (
        <i>
          {" "}
          <CgMenu className="menu-icon" onClick={openSidebar} />
        </i>
      )}
      <nav className={`navbar ${sidebarOpen && "active-navbar"}`}>
        <ul onClick={handleClick}>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink className={"links"} to={url}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
