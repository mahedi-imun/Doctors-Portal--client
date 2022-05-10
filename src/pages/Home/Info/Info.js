import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12 '>
            <InfoCard
                cardTitle="Opening Hours"
                img={clock} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard
                cardTitle="Visit our location"
                img={marker} bgClass='bg-accent'></InfoCard>
            <InfoCard
                cardTitle="Contact us now"
                img={phone} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;