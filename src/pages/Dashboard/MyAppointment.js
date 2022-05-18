import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const navigate = useNavigate()
    const date = (new Date())
    const formattedDate = format(date, 'PP')
    const [user] = useAuthState(auth);
    const [MyAppointment, setAppointment] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Barer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointment(data)

                })
        }
    }, [user])

    return (
        <div className='px-12'>
            <div className='lg:flex justify-between my-10  px-10'>
                <h4 className=' sm:mb-5 text-xl'>My Appointment {MyAppointment?.length}</h4>
                <button className='btn btn-disabled text-accent'>{formattedDate}</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

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
                            MyAppointment.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{a.patientName}</th>
                                <td>{a.treatmentName}</td>
                                <td>{a.slot}</td>
                                <td>{a.date}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p className=' text-success'>pay done</p>
                                        <p className=' text-primary'>{a.transactionId}</p>
                                    </div> }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;