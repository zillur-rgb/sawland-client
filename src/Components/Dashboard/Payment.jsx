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
    fetch(`http://localhost:5000/orders/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [paymentId]);

  return (
    <div>
      <h1>Complete your payment form order {paymentId}</h1>
      <OrderCard paymentId={paymentId} order={order} />
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order} />
      </Elements>
    </div>
  );
};

export default Payment;
