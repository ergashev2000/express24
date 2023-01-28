import React from "react";

import Discount from "../../components/Discount";
import Store from "../../components/StoreMain";
import Restaurant from "../../components/Restaurant";

import "./style.css";

const index = () => {
  return (
    <>
      <Discount />
      <Store />
      <Restaurant />
    </>
  );
};

export default index;
