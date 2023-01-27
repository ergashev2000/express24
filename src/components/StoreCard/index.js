import React from "react";

import ImgCard from "../../assets/images/store-img.jpg";

const index = () => {
  return (
    <>
      <div className="store__card">
        <img src={ImgCard} alt="Produc_name" />
        <span className="shadow--card">недоступна</span>
        <div className="store__card--body">
          <h3 className="store__card--title">Мидии запечённые в сыре</h3>
          <button type="button" className="store__card--btn">
            99 000
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
