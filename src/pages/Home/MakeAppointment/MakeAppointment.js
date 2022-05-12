import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className=' mt-32'>
            <div style={{background:`url(${appointment})`}}
            className='flex justify-center items-center px-12 text-white '>
                <div className='flex-1 mt-[-100px] hidden lg:block'><img src={doctor} alt="" /></div>
                <div className='flex-1'>
                    <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                    <h2 className='  text-4xl mt-5 font-bold'>Make an appointment Today</h2>
                    <p className='mt-5 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className='mt-5'>
                        <button className='btn bg-gradient-to-r from-secondary to-primary btn-primary text-white '>GET STARTED</button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MakeAppointment;