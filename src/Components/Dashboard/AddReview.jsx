import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    console.log(data);
    const newReview = {
      name: user?.displayName,
      city: data?.city,
      review: data?.review,
      rating: data?.rating,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => toast("Your review has been posted"));
    reset();
  };
  return (
    <div className="w-3/5 mx-auto my-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-main  font-semibold my-10">
        Provide Your Valuable Feedback
      </h1>
      <p className="text-center text-text">
        We are continuously improving your experience with us. We need your
        feedback so that we can understand how we can improve more.{" "}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center items-center my-10"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="border border-text border-opacity-30 rounded-md p-10 outline-none focus:border-opacity-100"
            type="text"
            disabled
            value={user?.displayName || ""}
            placeholder="name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            id="city"
            className="border border-text border-opacity-30 rounded-md p-10 outline-none focus:border-opacity-100"
            type="text"
            placeholder="Hamburg"
            {...register("city", { required: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            className="border border-text border-opacity-30 rounded-md p-10 outline-none focus:border-opacity-100"
            type="number"
            placeholder="5"
            {...register("rating", { required: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city">Review</label>
          <textarea
            id="city"
            className="border border-text border-opacity-30 rounded-md p-10 outline-none focus:border-opacity-100"
            type="text"
            placeholder="Review here"
            {...register("review", { required: true })}
          />
        </div>
        <input
          type="submit"
          value="Submit Review"
          className="btn bg-main hover:bg-hover border-none hover:border my-10"
        />
      </form>
    </div>
  );
};

export default AddReview;
