import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

// Properly wrap the publishable key in quotes
const stripePromise = loadStripe(
  "pk_test_51QfET9Lha1hle74UcmsEJtUbXCeAlLQcwBXrGWipyFSozrzOhpPtDd1RjKNDyU05ey2ikbTR8O4IVzrFM3SsPJZV00kcq6xwLw"
);

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
