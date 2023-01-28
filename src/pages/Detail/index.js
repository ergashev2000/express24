import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Star from "../../assets/icons/star.svg";
import Like from "../../assets/icons/heart.svg";
import Info from "../../assets/icons/info.svg";

import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/StoreCard";
import CartProduct from "../../components/CartProduct";

import { fetchData } from "../../actions";

import "./style.css";

const index = () => {
  const [selected, setSelected] = useState(false);
  const selectRef = useRef(null);

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data, fetchData]);

  const detailData = data?.find((item) => item.id == id);
  console.log(detailData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className="container">
        <div className="detail">
          <div className="store__products">
            <div
              className="back__btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              Назад
            </div>
            <div
              className="detail__overview"
              style={{ backgroundImage: `url(${detailData?.image})` }}
            ></div>
            <div className="overview__text">
              <div className="detail__info">
                <h3 className="detail__overview--title">{detailData?.nameCampany}</h3>
                <ul>
                  <li>
                    <img src={Star} />
                    {detailData?.rate}
                  </li>
                  <li>Время доставки · 43 - 63 мин</li>
                  <li className="deliver">Доставка · {detailData?.deleveryPrice} сум</li>
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

            {/* Cards */}

            <div className="store__cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="cart">
            <div>
              <h3 className="cart__title--main">Корзина</h3>
              <span className="clear">Очистить</span>
            </div>
            <hr className="hr" />
            <div className="cart__products">
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </div>
            <button type="button" className="cart__btn">
              <span>322,000 сум</span>
              <span>К оплате</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
