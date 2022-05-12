import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import Services from './Services';
// import { for} from 'date-fns';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('https://doctors-portal-bd.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-12'>
            <h4 className='text-center text-xl font-bold text-secondary mt-5'>Available Appointments on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Services>)
                }
            </div>
            <div>
                {treatment && 
                <AppointmentModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></AppointmentModal>}
            </div>

        </div>
    );
};

export default AvailableAppointment;