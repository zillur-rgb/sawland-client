import React, { isValidElement, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
const OrderForm = ({ stock, price, _id, sold }) => {
  const [quantity, setQuantity] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    onChange,
    formState: { errors },
  } = useForm();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    const { name, email, quantity, city, postcode, country } = data;
    const newOrder = {
      name,
      email,
      quantity,
      city,
      postcode,
      country,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((order) => toast.success("Order is placed succesfully"));

    const updatedTool = {
      stock: stock - quantity,
      sold: +(sold + quantity),
    };
    fetch(`http://localhost:5000/tools/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTool),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    reset();
  };
  return (
    <div className="w-2/5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label className="label">
            <span className="label-text text-lg">Your name</span>
          </label>
          <input
            type="text"
            value={user?.displayName || " "}
            {...register("name")}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div className="email">
          <label className="label">
            <span className="label-text text-lg">Email Address</span>
          </label>
          <input
            type="text"
            value={user?.email || " "}
            className="input input-bordered w-full"
            readOnly
            {...register("email")}
          />
        </div>
        <div className="total flex items-center">
          <div className="quantity">
            <label className="label">
              <span className="label-text text-lg">Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="quantity here"
              className="input input-bordered w-full"
              onChange={onChange}
              {...register("quantity", {
                required: true,
                min: 100,
                max: stock,
                onChange: (e) => {
                  setQuantity(e.target.value);
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "min" && (
                <span className="font-bold text-red-500 label-text-alt">
                  Minimum 100 Pieces
                </span>
              )}
              {errors.quantity?.type === "max" && (
                <span className="font-bold text-red-500 label-text-alt">
                  The quantity exceeds the stock. Please reduce the quantity.
                </span>
              )}
              {errors.quantity?.type === "required" && (
                <span className="font-bold text-red-500 label-text-alt">
                  Quantity is required
                </span>
              )}
            </label>
          </div>
          <div className="price ml-30">
            <p className="text-lg font-semibold">
              x €{price} = Total {price * quantity}
            </p>
          </div>
        </div>
        <div className="flex items-center flex-row gap-20">
          <div className="city">
            <label className="label">
              <span className="label-text text-lg">City</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("city")}
            />
          </div>
          <div className="postcode">
            <label className="label">
              <span className="label-text text-lg">Postcode</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("postcode")}
            />
          </div>
          <div className="country">
            <label className="label">
              <span className="label-text text-lg">country</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("country")}
            />
          </div>
        </div>
        {quantity < 100 || quantity > stock ? (
          <button
            disabled
            className="my-3 btn btn-primary font-text bg-main border-none hover:bg-hover w-full"
          >
            Order Now
          </button>
        ) : (
          <button className="my-3 btn btn-primary font-text bg-main border-none hover:bg-hover w-full">
            Order Now
          </button>
        )}
      </form>
      <p className="opacity-70 text-text font-text">
        Minimum order quantity: 100
      </p>
    </div>
  );
};

export default OrderForm;
