import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

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
    const {treatmentName,slot,phoneNumber,price,patientName,patientEmail,date}=data
    return (
        <div className= ''>
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
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;