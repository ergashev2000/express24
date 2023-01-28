import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchData } from "./actions";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
