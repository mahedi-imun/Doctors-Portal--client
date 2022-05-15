import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import {toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
const axios = require('axios');
const AppointmentModal = ({ treatment, date, setTreatment,refetch }) => {
    console.log(treatment?.name);
    const [user] = useAuthState(auth);
    const bookingDate = format(date, 'PP')
    const handleFrom = event => {
        event.preventDefault()
        const slot = event.target.slots.value;
        const phoneNumber = event.target.phone.value

        const bookingData = {
            treatmentId: treatment._id,
            treatmentName: treatment.name,
            date: bookingDate,
            slot: slot,
            phoneNumber: phoneNumber,
            patientEmail: user.email,
            patientName: user.displayName
        }
        axios.post('https://doctors-portal-bd.herokuapp.com/booking',{bookingData})
            .then( data => {
                const success = data.data.success;
                const booking = data.data.booking
                if(success === false){
                    toast(`already taken | ${booking?.treatmentName} | ${booking?.date}`)
                    setTreatment(null)
                }
                if(success === true){
                    toast(`successfully taken ${treatment.name} || ${bookingDate}`)
                    setTreatment(null)
                    refetch()

                }
            })
            .catch(error =>{
                console.log(error);
            });




    }

    return (
        <div className=''>
            <input type="checkbox" id="appointment-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label htmlFor="appointment-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{treatment?.name}</h3>
                    <form
                        onSubmit={handleFrom}
                        className='grid grid-cols justify-items-center items-center gap-5 mt-5'>
                        <input disabled value={format(date, 'PP')} className="input input-bordered  w-full max-w-xs" />
                        <select name='slots' className='select select-bordered w-full max-w-xs'>
                            {
                                treatment?.slots.map(slot => <option option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" disabled readOnly value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input value={user?.email} disabled name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className=" bg-accent text-white input input-bordered w-full max-w-xs cursor-pointer" />
                    </form>
                </div>
            </div>
           
           

        </div>
    );
};

export default AppointmentModal;