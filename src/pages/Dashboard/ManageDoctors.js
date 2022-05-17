import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const { data:doctors, isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors',{
        method:'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th> </th>
                        <th>avatar</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       doctors.map((doctor ,index)=> <DoctorsRow
                       key={doctor._id}
                       doctor={doctor}
                       index={index}
                       refetch={refetch}
                       >

                       </DoctorsRow>)
                   }

                </tbody>
            </table>
        </div>
    );
};

export default ManageDoctors;