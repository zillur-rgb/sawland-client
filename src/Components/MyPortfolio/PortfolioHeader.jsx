import { BsEnvelopeFill } from "react-icons/bs";

const PortfolioHeader = () => {
  return (
    <div className=" py-100 hover:bg-opacity-40 h-[500px] my-50 flex text-header flex-col justify-center items-center bg-main bg-opacity-20">
      <h1 className="text-5xl font-semibold text-main">
        &lt;{" "}
        <span className="mx-20 text-header uppercase">
          Hello This is Zillur
        </span>{" "}
        /&gt;
      </h1>
      <p className="text-text my-30 text-xl">
        Frontend Engineer based on Germany.
      </p>
      <a href="mailto:zillurdeu@gmail.com" className="flex items-center">
        <BsEnvelopeFill className="text-text text-3xl" />
        <p className="text-text mx-10">zillurdeu@gmail.com</p>
      </a>
    </div>
  );
};

export default PortfolioHeader;
