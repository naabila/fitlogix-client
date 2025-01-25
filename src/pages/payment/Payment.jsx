import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
function Payment() {
    const [searchParams] = useSearchParams();
    // Retrieve search parameter values
    const trainerName = searchParams.get('trainerName');
    const slotName = searchParams.get('slotName');
    const className = searchParams.get('className');
    const pakageName = searchParams.get('pakageName');
    const pakagePrice = searchParams.get('pakagePrice');
    console.log(trainerName,slotName,pakageName,pakagePrice)
  return (
    <>
      <div className="container mx-auto">
      <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm pakagePrice={pakagePrice}
                    trainerName={trainerName}
                    slotName={slotName}
                    pakageName={ pakageName}
                    className={className}
                    ></CheckoutForm>
                </Elements>
            </div>
      </div>
    </>
  )
}

export default Payment
