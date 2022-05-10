
import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const reviews =[
        {
            _id:1,
            name:'Winson Herry',
            city:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1
        },
        {
            _id:2,
            name:'Charlotte',
            city:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2
        },
        {
            _id:3,
            name:'Isabella',
            city:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3
        },

    ]
    return (
        <section className='mt-24'>
            <div className='px-12'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
                        <h4 className='text-4xl'>What Our Patients Says</h4>
                    </div>
                    <div> <img className='lg:w-48 w-28' src={quote} alt="" /></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10'>
                    {
                        reviews.map(review => <TestimonialCard
                        key={review._id}
                        review={review}
                        ></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;