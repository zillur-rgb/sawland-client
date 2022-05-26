import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch(`https://fast-ridge-03538.herokuapp.com/orders`).then((res) =>
      res.json()
    )
  );
  console.log(orders);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th>{order?._id.slice(-4)}</th>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.toolName}</td>
                <td>{order?.quantity}</td>
                <td>{order?.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
