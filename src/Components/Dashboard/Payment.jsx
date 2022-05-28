import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import OrderCard from "./OrderCard";

const stripePromise = loadStripe(
  "pk_test_51L3c3FL4ReXhsOnE6OOEz48RBGvC9i1yXcUmncNDesq3sfbeMS2rskW0hg3E2FrYCm4WKhdTV2etvy53VaPzdMFU00RUNarXPW"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [order, setOrder] = useState({});
  console.log(order);

  useEffect(() => {
    fetch(`http://localhost:5000/payment/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [paymentId]);

  return (
    <div>
      <h1 className="w-3/4 mx-auto text-2xl text-main font-medium">
        Complete your payment form order for {paymentId}
      </h1>
      <OrderCard paymentId={paymentId} order={order} />
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={order?.total}
          name={order?.name}
          email={order?.email}
        />
      </Elements>
    </div>
  );
};

export default Payment;
