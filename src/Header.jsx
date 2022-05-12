import React from 'react'
import { Link } from "react-router-dom";

//! images import !//

import logo from "./images/logo.png";

//! <-----------> !//

const Header = () => {
  return (
    <header className="container header">
          <img src={logo} alt="logo" />
          <nav className="nav">
            <Link to="/" className="nav_link">
              Главная
            </Link>
            <Link to="/About" className="nav_link">
              О нас
            </Link>
            <Link to="/Students" className="nav_link">
              Обучающимся
            </Link>
            <Link to="/StudentLife" className="nav_link">
              Жизнь Университета
            </Link>
            <Link to="/Other" className="nav_link">
              Дополнитено
            </Link>
            <Link to="/Documents" className="nav_link">
              Документы
            </Link>
          </nav>
        </header>
  );
}

export default Header;
