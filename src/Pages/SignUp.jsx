import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-3/4 mx-auto mb-100">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Signup Here
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center"
      >
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="text-text label-text">Fullname</span>
          </label>
          <input
            type="text"
            {...register("fullname", {
              required: true,
            })}
            placeholder="Alexander Dumas"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.fullname?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Name is required!!
              </span>
            )}
          </label>
          <label className="label">
            <span className="text-text label-text">Email Address</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            placeholder="alexander@dumas.com"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Email address is required
              </span>
            )}
            {errors?.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                Email is invalid
              </span>
            )}
          </label>
          <label className="label">
            <span className="text-text label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            placeholder="******"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Password is required
              </span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="label-text-alt text-red-600">
                Minimum password length is 8
              </span>
            )}
          </label>

          <button className="btn bg-main border-none hover:bg-hover">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
