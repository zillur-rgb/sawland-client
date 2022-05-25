import React from "react";
import { Route, Routes } from "react-router-dom";
import AddATool from "../Components/Dashboard/AddATool";
import AddReview from "../Components/Dashboard/AddReview";
import ManageAllOrders from "../Components/Dashboard/ManageAllOrders";
import MyOrders from "../Components/Dashboard/MyOrders";
import MyProfile from "../Components/Dashboard/MyProfile";
import Users from "../Components/Dashboard/Users";
import RequireAuth from "../Components/RequireAuth/RequireAuth";
import Blogs from "./Blogs";
import Dashboard from "./Dashboard";
import Details from "./Details";
import ForgetPassword from "./ForgetPassword";
import Homepage from "./Homepage";
import Login from "./Login";
import NotFound from "./NotFound";
import Reviews from "./Reviews";
import SignUp from "./SignUp";
import Tools from "./Tools";
import VerifyEmail from "./VerifyEmail";

const Allpages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tools" element={<Tools />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route path="myorders" element={<MyOrders />} />
        <Route path="addreview" element={<AddReview />} />
        <Route index element={<MyProfile />} />
        <Route path="users" element={<Users />} />
        <Route path="manageallorders" element={<ManageAllOrders />}></Route>
        <Route path="addaproduct" element={<AddATool />}></Route>
      </Route>
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route
        path="/tools/:id"
        element={
          <RequireAuth>
            <Details />
          </RequireAuth>
        }
      />
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Allpages;
