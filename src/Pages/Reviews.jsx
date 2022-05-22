import React from "react";
import AllReviews from "../Components/Reviews/AllReviews";

const Reviews = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Feedbacks of our valuable customers
      </h1>
      <AllReviews />
    </div>
  );
};

export default Reviews;
