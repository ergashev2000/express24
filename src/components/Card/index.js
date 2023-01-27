import React from "react";

import Car from "../../assets/icons/car.svg";
import Like from "../../assets/icons/heart.svg";
import Star from "../../assets/icons/star.svg";

import Img2 from "../../assets/images/logo-pto.jpg";

import Img1 from "../../assets/images/img1.jpg";

const index = () => {
  return (
    <>
      <div className="card">
      <span className="store__img"><img src={Img2}/></span>
        <img src={Img1} alt="" />
        <div className="card__body">
          <h3 className="card__body--title">Broadway Lounge Bar</h3>
          <div className="card__body-category">
            Европейская / Европейская / Европейская / Европейская
          </div>
          <div className="card__bottom">
            <span className="star">
              <img src={Star} alt="" /> 4.4
            </span>
            <span className="price">
              <img src={Car} /> 14 000
            </span>
          </div>
          <span className="card__like">
            <img src={Like} />
          </span>
        </div>
      </div>
    </>
  );
};

export default index;
