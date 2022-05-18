import React from 'react';
import { Elements,} from '@stripe/react-stripe-js';
  import CheckoutForm from './CheckoutFrom'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51L0Z9NHKPkPGbWfR23AenemDc8oGBjTTBB42S1xTYRTBGrzG8aYDlz1YXqSl0E2lB5xVJ0OfJlX6yifY384ot6Q200Q65Ed65y');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`;
    const { data, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { treatmentName, slot, phoneNumber, price, patientName, patientEmail, date } = data
    return (
        <div className=' lg:flex lg:justify-around'>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h2 class="card-title text-secondary ">Hi {patientName} </h2>
                    <p className=' text-primary'> we will see you on {date}, {slot} ,{treatmentName} </p>
                    <p className='text-secondary'> you need to pay {price}</p>
                    <p>your phone number: {phoneNumber}</p>
                    <p>your email : {patientEmail}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h2 class="card-title text-center"> pay stripe</h2>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm  data={data}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;