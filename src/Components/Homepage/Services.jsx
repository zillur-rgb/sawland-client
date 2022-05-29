import { GiTestTubes } from "react-icons/gi";
import { HiEye, HiShieldCheck } from "react-icons/hi";
const Services = () => {
  const allServices = [
    {
      title: "Our Research",
      icon: <GiTestTubes />,
      text: "We test the products thoroughly in multiple scenarios with our rigorous testing process",
    },
    {
      title: "Out Expert Board",
      icon: <HiEye />,
      text: "Our board has normal people just like you as well as the certified domain specialists.",
    },
    {
      title: "Why Trust Us?",
      icon: <HiShieldCheck />,
      text: "Our team is laser-focused on the quality of every piece of content that’s published.",
    },
  ];
  return (
    <div className="w-3/4 mx-auto my-100">
      <h1 className="text-main font-bold text-3xl text-center">
        Sawland is a brand you can trust!
      </h1>
      <p className="text-text w-full lg:w-1/2 text-center mx-auto my-15">
        Range of services we are giving you when you want to use our branded
        saws for your shop. We know what you want and we are here to give yout
        these.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 mt-60">
        {allServices.map((service, idx) => (
          <div key={idx} className="card bg-base-100 shadow-md">
            <div className="text-7xl flex items-center justify-center text-text">
              {service.icon}
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-header">{service.title}</h2>
              <p className="text-text my-15">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
