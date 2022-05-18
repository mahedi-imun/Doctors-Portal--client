import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements,} from '@stripe/react-stripe-js';
import { set } from 'date-fns';
const CheckoutFrom = ({data}) => {
    const {price,patientName,patientEmail,_id}=data;
    const[cardError , setCardError]=useState('')
    const[success , setSuccess]=useState('')
    const[loading , setLoading]=useState(false)
    const[transactionId , setTransactionId]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            'authorization': `Barer ${localStorage.getItem('accessToken')}`,
              "Content-Type": "application/json"
             },
          body: JSON.stringify({price }),
        })
          .then((res) => res.json())
          .then(data => {
              setClientSecret(data.clientSecret)});
      }, [price]);
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
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
            setCardError(error.message)
          
        } else {
            setCardError('')
      
          // confirm card payment 
          setLoading(true)

          const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:patientEmail,
                },
              },
            },
          );
          if(intentError){
              setCardError(error?.message)
              setSuccess('')
              setLoading(false)
        
          }else{
              setTransactionId(paymentIntent.id)
              setCardError('')
              setSuccess('congratulations success payment')
              const payment = {
                  transactionId:paymentIntent.id,
                  appointment: _id
              };
              if(paymentIntent.id){
                fetch(`http://localhost:5000/payment-booking/${_id}`,{
                    method:'PATCH',
                    headers:{
                      'authorization': `Barer ${localStorage.getItem('accessToken')}`,
                      "Content-Type": "application/json"
                    },
                    body:JSON.stringify({payment})
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLoading(false)
                })
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
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      { cardError && <p className=' text-red-700'>{cardError}</p>}
      { success && <>
        <p className=' text-success'>{success}</p>
        <p className=' text-base'> your transaction id : <span className='text-orange-500'>{transactionId}</span></p>
      </>}

      <button className=' btn-xs btn-success mt-5 btn' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    );
};

export default CheckoutFrom;