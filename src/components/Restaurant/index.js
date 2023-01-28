import React, { useState, useRef, useEffect } from "react";

import { useSelector } from 'react-redux';

import Card from "../Card";



const index = () => {
  const [selected, setSelected] = useState(false);
  const selectRef = useRef(null);
  const data = useSelector((state) => state.data);
  
  console.log(data);

  const handleScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSelect = (e) => {
    if (selected) {
      selectRef.current.style.maxHeight = "0";
      selectRef.current.style.opacity = ".3";
      setSelected(false);
    } else {
      selectRef.current.style.maxHeight = "280px";
      selectRef.current.style.opacity = "1";
      setSelected(true);
    }
  };

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
          <div className="filter__select">
            <div
              className="filter__option--default"
              onClick={(e) => handleSelect(e)}
            >
              Еще
            </div>
            <div
              className="filter__option--box"
              ref={selectRef}
              onScroll={handleScroll}
            >
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
              <div className="filter__option">Азиатская</div>
            </div>
          </div>
        </div>

        <div className="cards">
          {data.map(item => (
            <Card item={item}/>
          ))}
        </div>
        <div className="more__product">Показать еще</div>
      </section>
    </>
  );
};

export default index;
