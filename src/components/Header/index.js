import React, { useState, useEffect } from "react";

import Logo from "../../assets/images/logo.jpg";
import { SvgImg } from "../svg/svg";

import LoginModal from "../Login";

const index = () => {
  const [login, setLogin] = useState(false);

  const handleModal = () => {
    setLogin(!login);
  };

  useEffect(() => {
    document.body.style.overflow = login ? 'hidden' : 'unset';
  }, [login]);

  return (
    <>
      <header className="container">
        <div className="header">
          <a href="link" className="header__logo">
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
          <div className="profil" onClick={handleModal}>
            <SvgImg />
            <h4>Профиль</h4>
          </div>
        </div>
      </header>
      {login && <LoginModal handleModal={handleModal} />}
    </>
  );
};

export default index;
