import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { total } = order;
  console.log(total);
  // useEffect(() => {
  //   fetch("https://peaceful-meadow-77367.herokuapp.com/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ total }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.clientSecret) {
  //         setClientSecret(data.clientSecret);
  //       }
  //     });
  // }, [total]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
  };
  return (
    <div className="w-1/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!clientSecret || !stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
