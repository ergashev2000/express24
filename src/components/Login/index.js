import React, { useState, useEffect } from "react";

const index = ({ handleModal }) => {
  const [phone, setPhone] = useState("+998");

  const handleClickModal = (e) => {
    if (e.target.className === "login") {
      handleModal();
    }
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    let lastLetter = value.charAt(value.length - 1);
    if (
      !isNaN(value) &&
      value.length < 14 &&
      value.length > 3 &&
      lastLetter !== " "
    ) {
      setPhone(value);
    }
  };

  return (
    <>
      <div className="login__wrapper">
        <div className="login" onClick={(e) => handleClickModal(e)}>
          <div className="login__content">
            <span className="login__close" onClick={handleModal}></span>
            <h3 className="login__title">Введите номер телефона</h3>
            <p>и получите код подтверждения</p>
            <input
              type="text"
              className="login__input"
              placeholder="Номер телефона"
              value={phone}
              onChange={handleChangeInput}
            />
            <p className="policy">
              Нажимая кнопку получить код вы принимаете условия
              <a href="link">пользовательского соглашения</a>
            </p>
            <button type="button" className="login__btn">
              Получить код
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
