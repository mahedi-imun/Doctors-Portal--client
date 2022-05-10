import React from 'react';

const TestimonialCard = ({review}) => {
    const {name,img,description,city}=review
    return (
        <div className="pt-4 bg-white rounded-xl shadow mx-auto my-10 ">
            <blockquote className="m-5">
                <p className="font-semibold">{description} </p>
                
            </blockquote>

            <div className="text-white  p-8 rounded-b-xl md:flex md:items-center">

                <img src={img} alt="" className="w-24 h-24 rounded-full border-4 border-primary md:mr-4"/>
                <div className=' text-accent'>
                        <p className="font-bold"> {name}</p>
                        <p>{city}</p>
                    </div>
            </div>

        </div>
    );
};

export default TestimonialCard;