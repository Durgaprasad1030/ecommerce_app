// components/Header.js
import React from 'react';
import '../styles/Header.css'; // optional external CSS

function Header() {
  return (
    <header className="site-header">
      {/* --- Top Black Bar --- */}
      

      {/* --- Main Header --- */}
      <div className="main-header">
        <div className="header-left">
          <img
            src="https://placehold.co/40x40/000000/FFF?text=LOGO"
            alt="Brand Icon"
            className="header-logo-icon"
          />
        </div>

        <div className="header-center">
          <h1 className="header-logo-text">LOGO</h1>
        </div>

        <div className="header-right">
          <button className="icon-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          <button className="icon-btn"><i className="fa-regular fa-heart"></i></button>
          <button className="icon-btn"><i className="fa-solid fa-bag-shopping"></i></button>
          <button className="icon-btn"><i className="fa-regular fa-user"></i></button>
          <div className="lang-dropdown">
            ENG <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      {/* --- Bottom Navigation --- */}
      <nav className="bottom-nav">
        <ul>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">SKILLS</a></li>
          <li><a href="#">STORIES</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
