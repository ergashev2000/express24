import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
