import React from "react";

const Skills = () => {
  const frontend = [
    "JavaScript",
    "React",
    "NextJs",
    "Firebase Auth",
    "TailwindCSS",
    "StyledComponents",
    "Bootstrap 5",
    "Chakra UI",
    "SASS",
    "CSS",
    "HTML 5",
  ];

  const backend = ["NodeJS", "ExpressJS", "Mongoose", "MongoDB", "JWT"];
  return (
    <div className="flex gap-40">
      <div className="card w-96 bg-base-100 shadow-xl border border-text border-opacity-40">
        <div className="card-body">
          <h2 className="card-title">Frontend Technologies</h2>

          <div className="grid grid-cols-2">
            {frontend.map((f, idx) => (
              <p className="text-text text-lg my-5" key={idx}>
                {f}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border border-text border-opacity-40">
        <div className="card-body">
          <h2 className="card-title">Frontend Technologies</h2>

          <div className="grid grid-cols-2">
            {backend.map((f, idx) => (
              <p className="text-text text-lg my-5" key={idx}>
                {f}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
