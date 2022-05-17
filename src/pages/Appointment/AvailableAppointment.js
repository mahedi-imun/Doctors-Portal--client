import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import AppointmentModal from './AppointmentModal';
import Services from './Services';
import { useQuery } from 'react-query'

const AvailableAppointment = ({ date }) => {
    const formattedDate = format(date, 'PP')
    const [treatment, setTreatment] = useState(null)
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-12'>
            <h4 className='text-center text-xl font-bold text-secondary mt-5'>Available Appointments on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    services?.map(service => <Services
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
                        refetch={refetch}
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></AppointmentModal>}
            </div>

        </div>
    );
};

export default AvailableAppointment;