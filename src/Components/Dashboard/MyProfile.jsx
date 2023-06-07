import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [update, setUpdate] = useState(true);
  const [user] = useAuthState(auth);

  const { data: userData, isLoading } = useQuery(
    "myProfile",
    async () =>
      await fetch(`https://sawland.onrender.com/users/${user?.email}`).then(
        (res) => res.json()
      )
  );
  const [name, setName] = useState(userData?.name ? userData?.name : "");
  const [city, setCity] = useState(userData?.city ? userData?.city : "");
  const [postcode, setPostcode] = useState(
    userData?.postcode ? userData?.postcode : ""
  );
  const [country, setCountry] = useState(
    userData?.country ? userData?.country : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      email: userData.email,
      name: name || userData?.name,
      city: city || userData?.city,
      postcode: postcode || userData?.postcode,
      country: country || userData?.country,
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

        <form className="my-50" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              id="name"
              disabled={update ? true : false}
              value={name}
              onChange={({ target }) => setName(target.value)}
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
            />
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                value={city}
                onChange={({ target }) => setCity(target.value)}
                id="city"
                disabled={update}
                placeholder="city"
                className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                value={postcode}
                disabled={update ? true : false}
                onChange={({ target }) => setPostcode(target.value)}
                placeholder="postcode"
                className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country </label>
              <input
                id="country"
                placeholder="country"
                disabled={update ? true : false}
                value={country}
                onChange={({ target }) => setCountry(target.value)}
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
