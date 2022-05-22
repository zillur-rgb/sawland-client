import React from "react";
import Hero from "../Components/Homepage/Hero";
import Services from "../Components/Homepage/Services";
import BestSellingProducts from "../Components/Products/BestSellingProducts";
import NewProducts from "../Components/Products/NewProducts";
import Statistics from "../Components/Shared/Statistics";
import Reviews from "../Components/Reviews/Reviews";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Services />
      <BestSellingProducts />
      <NewProducts />
      <Reviews />
    </div>
  );
};

export default Homepage;
