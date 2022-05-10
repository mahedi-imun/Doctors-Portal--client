import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
import treatment from '../../../assets/images/treatment.png';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening,
        },
    ]
    return (
        <div className=' mt-10 px-12 '>
            <div className='text-center'>
                <h3 className=' text-xl text-primary font-bold capitalize'>Our services</h3>
                <h2 className=' text-2xl'>Services We Provide</h2>
            </div>
            <div className='  grid lg:grid-cols-3 grid-cols-1 gap-10  mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }

            </div >
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-24 mt-32 lg:px-20'>
                <div className='flex justify-center items-center '><img  src={treatment} alt="" /></div>
                <div className='flex  flex-col justify-center items-start'>
                    <h2 className=' text-accent text-4xl'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='mt-5 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className='mt-5'>
                        <button className='btn bg-gradient-to-r from-secondary to-primary btn-primary text-white '>GET STARTED</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Services;