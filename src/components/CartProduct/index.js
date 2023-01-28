import React from "react";

const index = () => {
  return (
    <>
      <div className="cart__product">
        <div className="cart__name">
          <h3 className="cart__title">Киймали пиде</h3>
          <span className="cart__product--price">45,000 сум</span>
        </div>
        <div className="counter">
          <span className="minus">-</span>
          <span className="cart__product--count">1</span>
          <span className="plus">+</span>
        </div>
        <hr />
      </div>
    </>
  );
};

export default index;
