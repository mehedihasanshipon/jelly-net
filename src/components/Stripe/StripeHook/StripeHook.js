import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './StripeHook.css'

const StripeHook = ({orders}) => {
console.log(orders);
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [status,setStatus] = useState('Pending');
  
  
//   console.log(paymentSuccess);


    const handleOrder = (paymentId)=>{
        const order = {...orders,paymentId,status}
        fetch('https://arcane-earth-23452.herokuapp.com/bookOrder',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(order)
        })
    }
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
    //   console.log("[PaymentMethod]", paymentMethod);
    setPaymentSuccess(paymentMethod.id);
    setPaymentError(null);
    handleOrder(paymentMethod.id);
    }
  };

  return (
    <div className="stripe-hook">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="mt-4  btn btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Proceed your payment
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your payment  successfull</p>
      )}
    </div>
  );
};

export default StripeHook;
