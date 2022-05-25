import React, { useState } from "react";

const BlogCard = ({ blog }) => {
  const [showAll, setShowAll] = useState(false);
  const { img, desc, title } = blog;
  return (
    <div
      onClick={() => setShowAll(!showAll)}
      class="card   w-96 cursor-pointer bg-base-100 shadow-xl"
    >
      <figure className="tooltip" data-tip="hello">
        <img src={`${img}?w=400&h=225`} alt="Shoes" />
      </figure>
      <div class="tooltip" data-tip="click to expand">
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{showAll ? desc : desc.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
