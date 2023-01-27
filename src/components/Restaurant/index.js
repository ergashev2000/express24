import React from "react";

import Card from '../Card'

const index = () => {
  return (
    <>
      <section className="container">
        <h2 className="restaurant__title">Рестораны</h2>
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

        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="more__product">Показать еще</div>
      </section>
    </>
  );
};

export default index;
