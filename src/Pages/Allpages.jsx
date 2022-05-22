import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import Homepage from "./Homepage";
import Login from "./Login";
import Reviews from "./Reviews";
import SignUp from "./SignUp";
import Tools from "./Tools";

const Allpages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
    </Routes>
  );
};

export default Allpages;
