import React, { useContext } from "react";
import { useQuery } from "react-query";
import ToolsContext from "../../ToolsContext/ToolsContext";
import Loading from "../Shared/Loading";

const AllReviews = () => {
  // const { reviews } = useContext(ToolsContext);

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-50 my-60">
      {reviews?.map((review) => (
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
  );
};

export default AllReviews;
