import React, { useContext } from "react";
import { toast } from "react-toastify";
import ToolsContext from "../../ToolsContext/ToolsContext";

const Users = () => {
  const { users } = useContext(ToolsContext);
  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(`Succesfully made admin`);
      });
  };
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Delete User</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => (
            <tr key={user?._id}>
              <th>{user?._id.slice(-5, -1)}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                <button className="btn btn-xs bg-red-500">Delete User</button>
              </td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    onClick={() => makeAdmin(user?.email)}
                    className="btn btn-xs bg-main"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
