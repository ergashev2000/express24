import React from "react";

import Logo from "../../assets/images/logo.jpg";
import { SvgImg } from "../svg/svg";

const index = () => {
  return (
    <>
      <header className="container">
        <div className="header">
          <a href="#" className="header__logo">
            <img src={Logo} alt="Logo header" />
          </a>
          <div className="search__box">
            <input
              type="text"
              name="search"
              id="search-id"
              placeholder="Заведение, блюдо, товар или кухня"
            />

            <button type="button" className="search__btn">
              Найти
            </button>
          </div>

          <div className="address">
            <h6>address</h6>
          </div>
          <div className="profil">
            <SvgImg />
            <h4>Профиль</h4>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
