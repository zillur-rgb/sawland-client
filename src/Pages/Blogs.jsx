import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BlogCard from "../Components/Blogs/BlogCard";
import BlogModal from "../Components/Blogs/BlogModal";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://fast-ridge-03538.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((result) => setBlogs(blogs.concat(result)));
  }, []);
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-center text-4xl text-main font-bold mt-50">
        Our employees also write blog!{" "}
      </h1>
      <p className="w-3/5 text-text text-center mx-auto mb-50 mt-15">
        Our employees are like: the one who cooks can also bind his/her hair.
        Here is the proof! Explore some of the article that are posted by
        different employees of our company.
      </p>

      <BlogModal />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 my-50">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
