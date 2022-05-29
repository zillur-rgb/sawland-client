import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [update, setUpdate] = useState(true);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch("https://peaceful-meadow-77367.herokuapp.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setuserData(data));
  }, []);

  const { data, isLoading, refetch } = useQuery("usersdata", () => {
    fetch("https://peaceful-meadow-77367.herokuapp.com/users", {
      method: "GET",
    }).then((res) => res.json());
  });
  const [userData, setuserData] = useState([]);
  const exact = userData.find((data) => data?.email === user?.email);
  console.log(exact);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  console.log(userData);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      email: exact?.email,
      name: name,
      city: city,
      postcode: postcode,
      country: country,
    };

    fetch(`https://peaceful-meadow-77367.herokuapp.com/users/${user?.email}`, {
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
      });
  };

  if (loading) {
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
              value={update ? exact?.name : name}
              onChange={({ target }) => setName(target.value)}
              placeholder="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={exact?.email}
              readOnly
              className="my-10 p-10 border-text border rounded-lg border-opacity-20 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                value={update ? exact?.city : city}
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
                value={update ? exact?.postcode : postcode}
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
                value={update ? exact?.country : country}
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
