import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddATool = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=768bf608b3c1bd035c56fc68e90e2c73`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const image = result.data.url;
          const newTool = {
            name: data?.toolName,
            image: image,
            desc: data?.desc,
            BestFor: data?.bestFor,
            price: data?.price,
            stock: data?.stock,
            sold: data?.sold,
          };

          fetch("https://sawland.onrender.com/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(newTool),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Added succesfully");
              }
            });
        }
      });
    reset();
  };
  return (
    <div>
      <h1 className="text-2xl">Add a New Tool</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center"
      >
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="text-text label-text">Tool Name</span>
          </label>
          <input
            type="text"
            {...register("toolName", {
              required: true,
            })}
            placeholder="Alexis Saw"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.toolName?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Name of the Tool is required!!
              </span>
            )}
          </label>
          <label className="label">
            <span className="text-text label-text">Best For</span>
          </label>
          <input
            type="text"
            {...register("bestFor", {
              required: true,
            })}
            placeholder="Can cut wood"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.toolName?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Name of the Tool is required!!
              </span>
            )}
          </label>
          <label className="label">
            <span className="text-text label-text">Description</span>
          </label>
          <textarea
            type="text"
            {...register("desc", {
              required: true,
            })}
            placeholder="Description goes here"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.desc?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Description is required
              </span>
            )}
          </label>
          <label className="label">
            <span className="text-text label-text">Price</span>
          </label>
          <input
            type="number"
            {...register("price", {
              required: true,
            })}
            placeholder="25"
            className="input input-bordered w-full max-w-lg"
          />
          <label className="label">
            {errors?.price?.type === "required" && (
              <span className="label-text-alt text-red-600">
                Price is required
              </span>
            )}
          </label>
          <div className="flex justify-between gap-50">
            <div className="w-1/2">
              <label className="label">
                <span className="text-text label-text">Stock</span>
              </label>
              <input
                type="number"
                {...register("stock", {
                  required: true,
                })}
                placeholder="250"
                className="input input-bordered w-full max-w-lg"
              />
              <label className="label">
                {errors?.stock?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    Stock is required
                  </span>
                )}
              </label>
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="text-text label-text">Sold</span>
              </label>
              <input
                type="number"
                {...register("sold", {
                  required: true,
                })}
                placeholder="0"
                className="input input-bordered w-full max-w-lg"
              />
              <label className="label">
                {errors?.sold?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    Sold is required
                  </span>
                )}
              </label>
            </div>
          </div>
          <label className="label">
            <span className="text-text label-text">Tool Image</span>
          </label>
          <input
            type="file"
            className="my-10"
            {...register("image", {
              required: true,
            })}
          />

          <button className="btn bg-main border-none hover:bg-hover">
            Add New Tool
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddATool;
