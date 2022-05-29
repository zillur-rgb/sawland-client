import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, name, email, id }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  useEffect(() => {
    if (price) {
      fetch(
        "https://peaceful-meadow-77367.herokuapp.com/create-payment-intent",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            price,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);
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

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: { name: name, email: email },
        },
      });
    console.log(paymentIntent);

    if (error || intentError) {
      setCardError(error?.message || intentError?.message);
      setSuccess("");
    } else {
      setSuccess("Congrats! Your payment is success");
      setCardError("");

      // Store payment on database
      const payment = {
        id: id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://peaceful-meadow-77367.herokuapp.com/orders/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            navigate("/");
          }, 5000);
        });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl py-50 px-20 w-1/4 mx-auto my-50">
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
        <button
          className="btn bg-main border-none btn-xs my-20"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <p className="text-success-500">{success}</p>}
    </div>
  );
};

export default CheckoutForm;
