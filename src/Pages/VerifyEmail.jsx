import React from "react";

const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl text-main">
        A verification email has been sent to your email. Please click the link
        to verify your account.
      </h1>
      <h1>You will be redriect in 5 seconds if not then press button below.</h1>
      <button className="bg-main text-white">Back to Home</button>
    </div>
  );
};

export default VerifyEmail;
