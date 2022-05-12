import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="hero min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12">
                <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt='chair' />
                <div className='flex flex-col items-start text-left '>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button style={{ background: 'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)' }} className="btn btn-primary font-bold capitalize text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;