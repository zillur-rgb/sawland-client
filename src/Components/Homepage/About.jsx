import team from "../../Assets/team.jpg";
const About = () => {
  return (
    <div className="w-3/5 mx-auto">
      <h1 className="text-main font-bold text-3xl text-center my-30">
        We are a young passionate team <br /> who wants to impact on saw
        industry.
      </h1>

      <div className="flex justify-between items-center my-100">
        <img className=" rounded-2xl" src={team} alt="teampic" />
        <div className="w-2/5">
          <h1 className="text-header text-2xl font-semibold">
            We want to tell you with whom you wdeal with!
          </h1>
          <p className="text-text">
            People want to know what your business does and how it can help
            them. After all, if people can't figure out what you do, how will
            they know they need your product or service? So, skip the industry
            lingo — that's what Apptopia does on its About Us page. The
            startup's simple but polished language effectively communicates the
            company's offering while still allowing the Average Joe to
            understand it. that's what Apptopia does on its About Us page. The
            startup's simple but polished language effectively communicates the
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
