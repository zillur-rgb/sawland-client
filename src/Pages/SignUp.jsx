import React, { useHistory, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Shared/Loading";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { toast } from "react-toastify";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [token] = useToken(user);

  if (token) {
    navigate("/");
  }
  if (loading || updating) {
    return <Loading />;
  }
  let errorMessage = "";
  if (error || Uerror) {
    errorMessage = "Error Signing Up";
  }
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({
      displayName: user?.fullname,
    });
    toast("You are succesfully signed up and redirected");
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

          {errorMessage}

          <button className="btn bg-main border-none hover:bg-hover">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
