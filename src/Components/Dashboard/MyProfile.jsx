import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [update, setUpdate] = useState(true);
  const [user, loading] = useAuthState(auth);

  const { isLoading, data, refetch } = useQuery("user", () =>
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const [name, setName] = useState(data?.name);
  const [city, setCity] = useState(data?.city);
  const [postcode, setPostcode] = useState(data?.postcode || "");
  const [country, setCountry] = useState(data?.country || "");

  console.log(data);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      email: user?.email,
      name: name === "" ? data?.name : name,
      city: city === "" ? data?.city : city,
      postcode: postcode === "" ? data?.postcode : postcode,
      country: country === "" ? data?.country : country,
    };

    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((update) => {
        toast.success("Profile updated");
        setUpdate(false);
        refetch();
      });
  };

  if (loading || isLoading) {
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
              value={user?.email}
              readOnly
              className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                value={data?.city}
                onChange={({ target }) => setCity(target.value)}
                id="city"
                disabled={update ? true : false}
                placeholder="city"
                className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                value={data?.postcode}
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
                value={data?.country}
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
        {refetch}
      </div>
    </div>
  );
};

export default MyProfile;
