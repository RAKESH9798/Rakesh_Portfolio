import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[handleClickOutside]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <div className="navigation">
      <div className="brand">
        <Link to="/" className="brand-link">
          PORTFOLIO
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`nav-item ${menuOpen ? "active" : ""}`} ref={menuRef}>
        <ul className={`item-container ${menuOpen ? "active" : ""}`}>
          <li className="item" onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/services">Services</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="item" onClick={closeMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
