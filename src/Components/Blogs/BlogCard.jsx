import React, { useState } from "react";

const BlogCard = ({ blog }) => {
  const [showAll, setShowAll] = useState(false);
  const { img, desc, title } = blog;
  return (
    <div
      onClick={() => setShowAll(!showAll)}
      className="card cursor-pointer bg-base-100 shadow-xl"
    >
      <figure className="tooltip" data-tip="hello">
        <img src={`${img}?w=400&h=225`} alt="Shoes" />
      </figure>
      <div className="tooltip" data-tip="click to expand">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{showAll ? desc : desc.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
