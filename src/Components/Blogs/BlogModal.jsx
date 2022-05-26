import { signOut } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BlogModal = () => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=768bf608b3c1bd035c56fc68e90e2c73`;
    console.log(data);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const newBlog = {
            title: data.title,
            desc: data.desc,
            img: img,
          };
          fetch("https://fast-ridge-03538.herokuapp.com/blogs", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(newBlog),
          })
            .then((res) => {
              if (res.status === 403 || res.status === 401) {
                signOut(auth);
              }
              return res.json();
            })
            .then((added) => {
              console.log(added);
              if (added.insertedId) {
                toast.success("Blogs added succesfully");
              }
            });
        }
      });
    reset();
  };
  return (
    <>
      {/* // <!-- The button to open modal --> */}
      <label
        htmlFor="my-modal-5"
        className="btn modal-button  bg-main border-none hover:bg-hover"
      >
        Add New Blog
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-4/5 max-w-3xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start justify-center "
          >
            <label className="label">
              <span className="text-text label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: true,
              })}
              placeholder="Alexis Saw"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="desc">
              <span className="text-text label-text">Description</span>
            </label>
            <textarea
              type="text"
              {...register("desc", {
                required: true,
              })}
              id="desc"
              placeholder="Blogs Content"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="image">
              <span className="text-text label-text">Image</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: true,
              })}
              placeholder="Alexis Saw"
              className="input input-bordered w-full max-w-lg"
            />
            <button className="bg-main border-hover btn my-10">Add Now</button>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close the Box
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogModal;
