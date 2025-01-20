import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseAuth from "../../hooks/UseAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  const totalPrice = 5;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }
  }, [totalPrice, axiosSecure]);

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

      // Payment succeeded
      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        text: `Transaction ID: ${paymentIntent.id}`,
      });

      // Save payment details in the database
      const paymentInfo = {
        transactionId: paymentIntent.id,
        amount: totalPrice,
        email: user?.email || "unknown@example.com",
      };

      await axiosSecure.post("/save-payment-info", paymentInfo);
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
      <button className="btn btn-sm btn-primary my-4" type="submit">
        Pay $5
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutForm;
