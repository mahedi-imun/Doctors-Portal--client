import React from 'react';

const Services = ({ service, setTreatment }) => {
    const { name, slots ,price} = service;
    // console.log(slots.length);
    return (
        <div className="card bg-white shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className=' text-accent'>{
                    slots.length > 0 ?
                        <>
                            <span  >{slots[0]}</span>
                        </>
                        :
                        <>
                            <span className=' text-red-700'>Try another day
                            </span>
                        </>
                }</p>
                <p className=' text-accent'>{slots.length} SPACES AVAILABLE</p>
                <p><small>price:$ {price}</small></p>
                <label
                    htmlFor="appointment-modal-6"
                    onClick={() => setTreatment(service)}
                    disabled={slots.length === 0}
                    className='btn modal-button btn-primary bg-gradient-to-r from-secondary to-primary text-white'>Book Appointment</label>
            </div>
        </div>
    );
};

export default Services;