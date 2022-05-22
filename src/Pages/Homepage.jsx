import React from "react";
import Hero from "../Components/Homepage/Hero";
import Services from "../Components/Homepage/Services";
import BestSellingProducts from "../Components/Products/BestSellingProducts";
import NewProducts from "../Components/Products/NewProducts";
import Statistics from "../Components/Shared/Statistics";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Services />
      <BestSellingProducts />
      <NewProducts />
    </div>
  );
};

export default Homepage;
