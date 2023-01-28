import React from "react";

import Car from "../../assets/icons/car.svg";
import Like from "../../assets/icons/heart.svg";
import Star from "../../assets/icons/star.svg";

import { Link } from "react-router-dom";

const index = ({ item }) => {
  const handleCard = () => {};

  return (
    <>
      <Link
        to={`/store/${item.id}`}
        className="card"
        onClick={() => handleCard(item.id)}
      >
        <span className="store__img">
          <img src={item.logo} />
        </span>
        <img src={item.image} alt={item.name} />
        <div className="card__body">
          <h3 className="card__body--title">{item.name}</h3>
          <div className="card__body-category">
            {item.catigory.map((item) => "  - " + item)}
          </div>
          <div className="card__bottom">
            <span className="star">
              <img src={Star} alt="" /> {item.rate}
            </span>
            <span className="price">
              <img src={Car} /> {item.deleveryPrice}
            </span>
          </div>
          <span className="card__like">
            <img src={Like} />
          </span>
        </div>
      </Link>
    </>
  );
};

export default index;
