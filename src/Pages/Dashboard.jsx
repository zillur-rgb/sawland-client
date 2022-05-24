import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../Components/Shared/Loading";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="drawer w-full lg:w-3/4 mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-main bg-opacity-20 rounded-lg">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 strokeCurrent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Dashboard</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {!admin && (
                  <>
                    <li>
                      <Link to="/dashboard/myorders">My Orders</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/addreview">Add a Review</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/dashboard">My Profile</Link>
                </li>
                {admin && (
                  <>
                    <li>
                      <Link to="/dashboard/users">All Users</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/manageallorders">
                        Manage All Orders
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-2/5 bg-base-100">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add a Review</Link>
            </li>
            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
