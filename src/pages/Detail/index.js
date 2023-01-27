import React from "react";

import Star from "../../assets/icons/star.svg";
import Like from "../../assets/icons/heart.svg";
import Info from "../../assets/icons/info.svg";

import Card from '../../components/StoreCard'

import "./style.css";

const index = () => {
  return (
    <>
      <section className="container">
        <div className="detail">
          <div className="store__products">
            <div className="back__btn">Назад</div>
            <div className="detail__overview"></div>
            <div className="overview__text">
              <div className="detail__info">
                <h3 className="detail__overview--title">Сыроварня</h3>
                <ul>
                  <li>
                    <img src={Star} />
                    4.7
                  </li>
                  <li>Время доставки · 43 - 63 мин</li>
                  <li className="deliver">Доставка · 12,500 сум</li>
                  <li className="info__icons">
                    <span>
                      {" "}
                      <img src={Like} />
                    </span>
                  </li>
                  <li className="info__icons">
                    <span>
                      {" "}
                      <img src={Info} />{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="detail__search--product">
              <label>
                <input
                  type="text"
                  name="search_input"
                  className="search__input"
                  placeholder="Поиск по заведению"
                />
              </label>
            </div>

            <div className="filter">
              <ul className="filter__items">
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Избранные
                  </a>
                </li>
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Uzcard
                  </a>
                </li>
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Новинки
                  </a>
                </li>
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Базары
                  </a>
                </li>
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Fast Food
                  </a>
                </li>
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Национальная
                  </a>
                </li>
                <li className="filter__item">
                  <a href="#" className="filter__link">
                    Азиатская
                  </a>
                </li>
              </ul>
              <div className="filter__option">
                <select name="" id="filter__select">
                  <option value="">$1</option>
                  <option value="">$1</option>
                  <option value="">$1</option>
                  <option value="">$1</option>
                </select>
              </div>
            </div>

            {/* Cards */}

            <div className="store__cards">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
          <div className="cart">{/* Korzinka */}</div>
        </div>
      </section>
    </>
  );
};

export default index;
