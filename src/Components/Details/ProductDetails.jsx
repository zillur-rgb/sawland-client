import hero from "../../Assets/hero.jpg";

const ProductDetails = ({ tool }) => {
  const { name, image, desc, price, stock } = tool;
  return (
    <div className=" my-100">
      <div className="hero-content flex-col  lg:flex-row gap-100 w-full mx-auto">
        <img
          src={image}
          className="w-full lg:w-2/5 block max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-full lg:text-left text-center lg:w-2/5">
          <h1 className="text-2xl font-header sm:text-5xl font-bold leading-15 text-header">
            {tool.name}
          </h1>
          <p className="py-6 text-text font-text w-5/6 md:w-3/5 lg:w-auto mx-auto">
            {tool.desc}
          </p>
          <p className="text-text font-text text-xl my-3">
            Price: <span className="text-header font-bold">€{tool.price}</span>
          </p>
          <p className="text-text font-text text-xl ">
            Stock: <span className="text-header font-bold">{tool.stock}</span>
          </p>
          <button className=" my-3 btn btn-primary font-text bg-main border-none hover:bg-hover">
            Order Now
          </button>
          <p className="opacity-70 text-text font-text">
            We deliver whole europe in just 4 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
