import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  //  From react hook form
  const {
    register,
    handleSubmit,
    reset,
    onChange,
    formState: { errors },
  } = useForm();

  const [update, setUpdate] = useState(true);
  const [user] = useAuthState(auth);

  const { data: userData, isLoading } = useQuery(
    "myProfile",
    async () =>
      await fetch(`https://sawland.onrender.com/users/${user?.email}`).then(
        (res) => res.json()
      )
  );
  // const [name, setName] = useState(userData?.name ? userData?.name : "");
  // const [city, setCity] = useState("");
  // const [postcode, setPostcode] = useState(
  //   userData?.postcode ? userData?.postcode : ""
  // );
  // const [country, setCountry] = useState(
  //   userData?.country ? userData?.country : ""
  // );

  const onSubmit = (data) => {
    // e.preventDefault();
    const { name, email, city, postcode, country } = data;

    const updatedData = {
      name,
      email,
      city,
      postcode,
      country,
    };

    fetch(`https://sawland.onrender.com/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((update) => {
        toast.success("Profile updated");
      });
    setUpdate(false);
  };

  if (isLoading) {
    return <Loading />;
  }

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
              className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              id="name"
              type="text"
              defaultValue={userData?.name || " "}
              {...register("name")}
              placeholder="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={userData?.email || " "}
              readOnly
              className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-none"
              type="text"
              {...register("email")}
            />
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                defaultValue={userData?.city || " "}
                {...register("city")}
                onChange={onChange}
                type="text"
                id="city"
                placeholder="city"
                className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                defaultValue={userData?.postcode || " "}
                {...register("postcode")}
                type="text"
                placeholder="postcode"
                className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country </label>
              <input
                id="country"
                placeholder="country"
                defaultValue={userData?.country || " "}
                {...register("country")}
                type="text"
                className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
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
