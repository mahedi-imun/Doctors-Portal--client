import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const date = (new Date())
    const formattedDate = format(date, 'PP')
    const [user] = useAuthState(auth);
    const [MyAppointment, setAppointment] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])

    return (
        <div className='px-12'>
            <div className='lg:flex justify-between my-10  px-10'>
                <h4 className=' sm:mb-5 text-xl'>My Appointment {MyAppointment.length}</h4>
                 <button className='btn btn-disabled text-accent'>{formattedDate}</button>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyAppointment.map((a,index) => <tr>
                                <th>{index+1}</th>
                                <th>{a.patientName}</th>
                                <td>{a.treatmentName}</td>
                                <td>{a.slot}</td>
                                <td>{a.date}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;