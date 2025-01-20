import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseAuth from "../../hooks/UseAuth";

const CheckoutForm = ({ price }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  // Fetch client secret from the backend when the component loads
  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card element not found!");
      return;
    }

    try {
      const { error: cardError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (cardError) {
        setError(cardError.message);
        return;
      }

      setError(""); // Clear any previous error

      // Confirm the payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Anonymous",
              email: user?.email || "unknown@example.com",
            },
          },
        });

      if (confirmError) {
        setError(confirmError.message);
        return;
      }

      setTransactionId(paymentIntent.id);
      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        text: `Transaction ID: ${paymentIntent.id}`,
      });

      // Optionally, send payment details to your backend for further processing (e.g., saving in the database)
      await axiosSecure.post("/save-payment-info", {
        transactionId: paymentIntent.id,
        amount: paymentIntent.amount,
        email: user?.email,
      });
    } catch (error) {
      console.error("Payment error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
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
        className="btn btn-sm btn-primary my-4"
        type="submit"
        // disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
