import React from "react";

// import Header from '../../components/Header'
import Discount from '../../components/Discount'
import Store from '../../components/Store'
import Restaurant from '../../components/Restaurant'
import Footer from '../../components/Footer'

import "./style.css"


const index = () => {
  return (
    <>
     {/* <Header/> */}
     <Discount/>
     <Store/>
     <Restaurant/>
     <Footer/>
    </>
  );
};

export default index;
