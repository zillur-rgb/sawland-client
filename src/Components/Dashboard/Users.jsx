import React, { useContext } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import ToolsContext from "../../ToolsContext/ToolsContext";
import Loading from "../Shared/Loading";

const Users = () => {
  // const { users } = useContext(ToolsContext);

  const {
    data: usersData,
    isLoading,
    refetch,
  } = useQuery("usersData", () =>
    fetch(`https://peaceful-meadow-77367.herokuapp.com/users`).then((res) =>
      res.json()
    )
  );

  const deleteUser = (email) => {
    if (window.confirm("Do you really want to delete this user?")) {
      fetch(`https://peaceful-meadow-77367.herokuapp.com/users/${email}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("User is deleted");
          refetch();
        });
    }
  };

  const makeAdmin = (email) => {
    fetch(`https://peaceful-meadow-77367.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast("You are not allowed to make someone admin!");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast(`Succesfully made admin`);
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
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
          {usersData?.map((user, idx) => (
            <tr key={user?._id}>
              <th>{user?._id.slice(-5, -1)}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user?.email);
                  }}
                  className="btn btn-xs bg-red-500"
                >
                  Delete User
                </button>
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
