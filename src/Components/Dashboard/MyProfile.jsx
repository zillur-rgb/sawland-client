import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [update, setUpdate] = useState(false);
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const { isLoading, data } = useQuery("user", () =>
    fetch(`http://localhost:5000/users/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(data);

  if (loading || isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-3/5 mx-auto flex flex-col ">
      <div>
        <h1>Your Personal Details</h1>
        <button
          onClick={() => setUpdate(!update)}
          className="btn btn-xs hover:bg-hover border-none bg-main"
        >
          Edit My Profile
        </button>

        <form className="my-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className={`${
                update ? "border" : "border-none"
              } border-text border-opacity-30 rounded-md my-10 p-10 outline-none focus:border-opacity-100`}
              {...(update ? "disabled" : "")}
              type="text"
              value={data?.name || " "}
              readOnly={update ? false : true}
              placeholder="name"
              {...register("example")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={data?.email || ""}
              className={`${
                update ? "border" : "border-none"
              } border-text border-opacity-30 rounded-md my-10 p-10 outline-none focus:border-opacity-100`}
              type="email"
              disabled={update ? false : true}
              placeholder="email"
              {...register("email")}
            />
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                value={data?.city || ""}
                id="city"
                disabled={update ? false : true}
                className={`${
                  update ? "border" : "border-none"
                } border-text border-opacity-30 rounded-md my-10 p-10 outline-none focus:border-opacity-100`}
                type="text"
                placeholder="city"
                {...register("city")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                value={data?.postcode || ""}
                disabled={update ? false : true}
                className={`${
                  update ? "border" : "border-none"
                } border-text border-opacity-30 rounded-md my-10 p-10 outline-none focus:border-opacity-100`}
                type="text"
                placeholder="postcode"
                {...register("postcode")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country </label>
              <input
                value={data?.country || ""}
                readOnly={update ? false : true}
                id="country"
                className={`${
                  update ? "border" : "border-none"
                } border-text border-opacity-30 rounded-md my-10 p-10 outline-none focus:border-opacity-100`}
                type="text"
                placeholder="country"
                {...register("country")}
              />
            </div>
          </div>
          <div className="w-full justify-end flex items-end">
            <input
              type="submit"
              value="Update Profile"
              className="btn bg-main "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
