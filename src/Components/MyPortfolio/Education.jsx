import React from "react";

const Education = () => {
  return (
    <div>
      <ul className="steps steps-vertical ">
        <li className="step step-primary pb-40">
          <div className="text-left ml-20">
            <p className="text-text ">Oct 2015 - Feb 2019</p>
            <p className="text-header text-lg ">
              North East University Bangladesh
            </p>
            <p className="text-main text-lg font-semibold">
              Computer Science and Engineering
            </p>
          </div>
        </li>
        <li className="step step-primary">
          <div className="text-left ml-20">
            <p className="text-text ">Oct 2021 - running</p>
            <p className="text-header text-lg ">Fachhochschule Südwestfalen</p>
            <p className="text-main text-lg font-semibold">
              Business Informatics
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
