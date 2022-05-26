import React, { useContext } from "react";
import ToolsContext from "../../ToolsContext/ToolsContext";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {
  // const { reviews } = useContext(ToolsContext);
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://fast-ridge-03538.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-3/4 mx-auto my-100">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        What our clients say?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-50 ">
        {reviews?.slice(-2).map((review) => (
          <div
            key={review._id}
            className=" border border-text border-opacity-20 card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-main">{review.name}</h2>
              <p className="text-header font-medium">{review.city}</p>
              <p className="text-text text-opacity-70">{review.review}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost">
                  Ratings: {review.rating}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
