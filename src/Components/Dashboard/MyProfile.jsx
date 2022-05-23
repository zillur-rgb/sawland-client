import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [update, setUpdate] = useState(false);
  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
};

export default MyProfile;
