import React from "react";
import Hero from "../Components/Homepage/Hero";
import Services from "../Components/Homepage/Services";
import BestSellingProducts from "../Components/Products/BestSellingProducts";
import NewProducts from "../Components/Products/NewProducts";
import Statistics from "../Components/Shared/Statistics";
import Reviews from "../Components/Reviews/Reviews";
import About from "../Components/Homepage/About";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <About />
      <Services />
      <BestSellingProducts />
      <NewProducts />
      <Reviews />
    </div>
  );
};

export default Homepage;
