import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../ContextProviders/AuthContextProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CheckoutForm({ pakagePrice,trainerName,slotName,pakageName,className }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate=useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const totalPrice = pakagePrice;
const pakage=pakageName;
const trainer=trainerName;
const slot=slotName;
const trainerClass=className;
  console.log(totalPrice,pakage,trainer,slot,trainerClass);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      return;
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log('Confirm error:', confirmError);
    } else {
      console.log('Payment Intent:', paymentIntent);

      if (paymentIntent.status === 'succeeded') {
        console.log('Transaction ID:', paymentIntent.id);

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
        pakage,
        trainer,
        slot,
        trainerClass,
          
        };

        try {
          const res = await axiosSecure.post('/payments', payment);
          console.log('Payment saved:', res.data);
          toast('Payment successfull');
          navigate("/alltrainer")
        } catch (err) {
          console.error('Error saving payment:', err);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#fff',
              '::placeholder': {
                color: '#fff',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='bg-deepOrange text-white font-semibold px-8 text-xl hover:bg-customBg transition-all hover:border my-5' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
  );
}

export default CheckoutForm;
