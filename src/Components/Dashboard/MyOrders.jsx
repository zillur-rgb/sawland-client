import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";
import OrderTable from "./OrderTable";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [modal, setModal] = useState(null);
  console.log(myOrders);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(myOrders.filter((order) => order._id !== id));
        toast("The order is now canceled");
      });
  };
  return (
    <div>
      <h1>This is my orders page</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool Name</th>
              <th>Ordered from</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <OrderTable
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                setModal={setModal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
