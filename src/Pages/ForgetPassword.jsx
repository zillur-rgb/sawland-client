import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Reset Your Password
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center mb-60"
      >
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="text-text label-text">
              Write Your Email Address here
            </span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            placeholder="alexander@dumas.com"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Email is missing!!
              </span>
            )}
          </label>

          <button className="btn bg-main border-none hover:bg-hover w-full max-w-lg">
            Send Password Reset Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
