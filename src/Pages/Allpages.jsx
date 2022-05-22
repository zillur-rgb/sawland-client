import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Tools from "./Tools";

const Allpages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Tools />} />
    </Routes>
  );
};

export default Allpages;
