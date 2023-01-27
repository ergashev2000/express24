import React from "react";

import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Telegram from "../../assets/icons/telegram.svg";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <ul className="footer__menu">
              <li className="footer__items">
                <a href="#" className="footer__link">
                  О нас
                </a>
              </li>
              <li className="footer__items">
                <a href="#" className="footer__link">
                  Контакты
                </a>
              </li>
              <li className="footer__items">
                <a href="#" className="footer__link">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>

            <div className="footer__bottom">
              <p>
                Служба поддержки:{" "}
                <a href="tel:+998 71 200 40 01">+998 71 200 40 01</a>
              </p>
              <ul className="footer__socails">
                <li className="footer__socail">
                  <a href="#" className="footer__socail--link">
                    <img src={Instagram} />
                  </a>
                </li>
                <li className="footer__socail">
                  <a href="#" className="footer__socail--link">
                    <img src={Facebook} />
                  </a>
                </li>
                <li className="footer__socail">
                  <a href="#" className="footer__socail--link">
                    <img src={Telegram} />
                  </a>
                </li>
                <li className="copy">
                  <p>Ⓒ 2023 Express24</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
