import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl text-main font-semibold">About me</h1>
      <div className="tabs tabs-boxed my-50">
        <p
          onClick={() => {
            setSkills(false);
            setEducation(true);
          }}
          className={`tab cursor-pointer ${
            education && "tab-active"
          } focus:bg-main`}
        >
          Education
        </p>
        <p
          onClick={() => {
            setSkills(true);
            setEducation(false);
          }}
          className={`tab cursor-pointer ${
            skills && "tab-active"
          } focus:bg-main`}
        >
          Skills
        </p>
      </div>
      {education && <Education />}
      {skills && <Skills />}
    </div>
  );
};

export default About;
