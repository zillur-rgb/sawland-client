import React from "react";
import Hero from "../Components/Homepage/Hero";
import Services from "../Components/Homepage/Services";
import BestSellingProducts from "../Components/Products/BestSellingProducts";
import Statistics from "../Components/Shared/Statistics";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Services />
      <BestSellingProducts />
    </div>
  );
};

export default Homepage;
