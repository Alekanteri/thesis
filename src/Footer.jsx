import React from 'react';

//! images import !//

import logo from "./images/logo.png"
import vk from "./images/VK_Blue_Logo_t.png"
import ok from "./images/ok_logo.png"

//! <-----------> !//

const Footer = () => {
  return (
    <footer className="bottom_content">
        <div className="container">
          <div className="about_info">
            <img src={logo} alt="logo" />
            <div className="contact_tel">
              <p>Приёмная комиссия</p>
              <h3>8 (8652) 35 74 94</h3>
              <h3>8 (8652) 35 88 34</h3>
            </div>
            <div className="social_link">
              <p>Социальные сети</p>
              <div className="scl">
                <a href="https://vk.com/mheu_official">
                  <img src={vk} alt="VK" />
                </a>
                <a href="https://ok.ru/anovpomosk">
                  <img src={ok} alt="OK" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cop">
          <div className="container">
            <p>
              © 2022 АНО ВО "Московский гуманитарно-экономический
              университет"
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
