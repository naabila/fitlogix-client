import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionHeading from '../../components/SectionHeading';
import SectionBanner from '../../components/SectionBanner';
import { AuthContext } from '../../ContextProviders/AuthContextProvider';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
function Payment() {
    const [searchParams] = useSearchParams();
    const{user}=useContext(AuthContext)
    // Retrieve search parameter values
    const trainerName = searchParams.get('trainerName');
    const slotName = searchParams.get('slotName');
    const className = searchParams.get('className');
    const pakageName = searchParams.get('pakageName');
    const pakagePrice = searchParams.get('pakagePrice');
    console.log(trainerName,slotName,pakageName,pakagePrice)
  return (
    <>
    <SectionBanner head='Pay here' />
      <div className="container mx-auto">
      <div className='flex  justify-start mt-10 gap-3 items-center'>
        <img className='h-[80px] w-[80px] rounded-full' src={user?.photoURL} alt="photo" />
      </div>
      <div className='flex justify-start gap-3 mt-5 items-center'>
        <h3 className='text-deepOrange'>Trainer: </h3>
        <p>{trainerName}</p>
      </div>
      <div className='flex justify-start gap-3 items-center'>
        <h3 className='text-deepOrange'>Slot: </h3>
        <p>{slotName}</p>
      </div>
      <div className='flex justify-start gap-3 items-center'>
        <h3 className='text-deepOrange'>Class: </h3>
        <p>{className}</p>
      </div>
      <div className='flex justify-start gap-3 items-center'>
        <h3 className='text-deepOrange'>Pakage: </h3>
        <p>{pakageName}</p>
      </div>
      <div className='flex justify-start gap-3 items-center'>
        <h3 className='text-deepOrange'>Price: </h3>
        <p>{pakagePrice}</p>
      </div>
      <div className='flex justify-start gap-3 items-center'>
        <h3 className='text-deepOrange'>Class: </h3>
        <p>{className}</p>
      </div>
      <div className='flex justify-start gap-3 items-center'>
        <h3 className='text-deepOrange'>Client name: </h3>
        <p>{user?.displayName}</p>
      </div>
      


      <div className="mt-10">
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
