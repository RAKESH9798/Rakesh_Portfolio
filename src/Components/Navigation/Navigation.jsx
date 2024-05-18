import React, { useEffect, useRef, useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navigation" ref={menuRef}>
      <div className="brand">
        <h1><a href="#">PORTFOLIO</a></h1>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`nav-item ${menuOpen ? 'active' : ''}`}>
        <ul className={`item-container ${menuOpen ? 'active' : ''}`}>
          <li className="item"><a href="#">About Me</a></li>
          <li className="item"><a href="#">Projects</a></li>
          <li className="item"><a href="#">Blogs</a></li>
          <li className="item"><a href="#">Hire Me</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
