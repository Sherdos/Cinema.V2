import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <h1>Cinema</h1>
        </div>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-link"></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
