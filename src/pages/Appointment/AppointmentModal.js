import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const AppointmentModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const handleFrom = event => {
        event.preventDefault()
        const slot = event.target.slots.value;
        console.log(slot);
        setTreatment(null)

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
                        <input name='name' type="text" placeholder="Full Name" disabled={user?.displayName } value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className=" bg-accent text-white input input-bordered w-full max-w-xs cursor-pointer" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AppointmentModal;