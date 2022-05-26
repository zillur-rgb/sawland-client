import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Invoice Management Website",
      desc: "The task is mainly to create a system where user will be able to manage invoice for their client. User will be able to create, delete or update their invoice. User must login to use the system and also to keep the data.",
      liveLink: "https://invoice-master-10e23.web.app/",
      client: "https://github.com/zillur-rgb/Invoice-Master-Client",
      server: "https://github.com/zillur-rgb/invoice-master-server",
      technology: [
        "Figma",
        "Balsamiq",
        "Reactjs",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Firebase Auth",
        "Tailwind CSS",
        "Heroku",
      ],
      image: "https://i.ibb.co/GWdhjmw/ed.jpg",
    },
    {
      id: 2,
      title: "Inventory Management Website",
      desc: "Wheel Wave is a 3rd party cycle supplier who sells cycle of other companies. So this homepage was mainly for suppliers. Supplier can add new products, delete or can update if a product is delivered. But he/ she must be logged in.",
      liveLink: "https://wheel-wave.web.app/",
      client: "https://github.com/zillur-rgb/wheel-wave-client",
      server: "https://github.com/zillur-rgb/wheel-wave-client",
      technology: [
        "Figma",
        "Reactjs",
        "NodeJs",
        "ExpressJs",
        "Mongoose",
        "Firebase Hosting",
        "Firebase Auth",
        "Bootstrap 5",
        "Heroku",
      ],
      image: "https://i.ibb.co/cNCT20N/Frame-12.png",
    },
    {
      id: 3,
      title: "Tour Agency Website",
      desc: "The website is for a tour agency who arranges trip across the Europe with resasonable costs. An user can see trending trips, also check all trips also can see details. User can search for trips with their budget and destinations.",
      liveLink: "https://flexytrips.web.app/",
      client: "https://github.com/zillur-rgb/flexytrips-client",
      server: "https://github.com/zillur-rgb/flexytrips-server",
      technology: [
        "Figma",
        "Reactjs",
        "NextJs",
        "NodeJs",
        "ExpressJs",
        "Mongoose",
        "Firebase Hosting",
        "Firebase Auth",
        "CSS 3",
        "Heroku",
      ],
      image: "https://i.ibb.co/XXHxR1j/Frame-2.png",
    },
  ];
  return (
    <div className="w-3/4 mx-auto my-50">
      <h1 className="text-main text-3xl font-semibold my-50 text-center">
        My Latest Fullstack Projects
      </h1>
      <div className="w-full mx-auto grid lg:grid-cols-3 gap-40 grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={`${project.image}?w=400&h=225`} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <div className="flex justify-between">
                <a href={project.liveLink} target="_blank">
                  <button className="btn btn-xs">Live Link</button>
                </a>
                <a href={project.client} target="_blank">
                  <button className="btn btn-xs">Client Code</button>
                </a>
                <a href={project.server} target="_blank">
                  <button className="btn btn-xs">Server Code</button>
                </a>
              </div>

              <div className="card-actions justify-center my-10">
                {project.technology.map((tech, idx) => (
                  <div
                    key={idx}
                    className="badge badge-outline border border-text border-opacity-30"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
