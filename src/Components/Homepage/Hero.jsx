import { Link } from "react-router-dom";
import hero from "../../Assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero h-auto md:h-[850px] bg-main bg-opacity-20">
      <div className="hero-content flex-col-reverse justify-between lg:flex-row-reverse">
        <img
          src={hero}
          className="hidden sm:block max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-5/6 lg:w-1/2">
          <h1 className="text-2xl font-header leading-10 sm:text-5xl font-bold leading-15 text-header">
            We Manufacture Worldclass Saw Products
          </h1>
          <p className="py-6 text-text font-text">
            Sawland is a land of popular branded saw products. You order and we
            manufacture over whole world. 3 months money back guarantee of any
            product.
          </p>
          <Link to="/tools">
            <button className=" btn btn-primary font-text bg-main border-none hover:bg-hover">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
