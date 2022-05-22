import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Shared/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (user || gUser) {
    navigate("/");
  }
  if (loading || gLoading) {
    return <Loading />;
  }
  let errorMessage = "";
  if (error || gError) {
    errorMessage = "Error Signing Up";
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    reset();
  };
  return (
    <div className="w-3/4 mx-auto flex flex-col items-center justify-center mb-60">
      <h1 className="text-main font-bold my-60 text-3xl text-center">
        Login Here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="text-text label-text">Email Address</span>
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

          <label className="label">
            <span className="text-text label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            placeholder="******"
            className="input input-bordered w-full max-w-lg "
          />
          <label className="label">
            {errors?.password?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Password is missing!!
              </span>
            )}
          </label>

          <button className="btn bg-main border-none hover:bg-hover w-full max-w-lg">
            Login
          </button>
        </div>
        <h1 className="text-red-500">{errorMessage}</h1>
      </form>
      <div>
        <div className="flex flex-col items-center justify-between">
          <p className="text-left">
            New buyer?
            <Link to="/signup">
              <button className="btn btn-link text-main font-semibold">
                Register Here
              </button>
            </Link>
          </p>
          <p className="text-right">
            Forgot Password?
            <button
              onClick={() => navigate("/forgetpassword")}
              className="btn btn-link text-main font-semibold"
            >
              Reset Now
            </button>
          </p>
        </div>
        <div className="divider max-w-lg">OR</div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-ghost bg-none border border-main  w-full max-w-sm capitalize text-text"
      >
        <FcGoogle className=" text-2xl" /> Signin with Google
      </button>
    </div>
  );
};

export default Login;
