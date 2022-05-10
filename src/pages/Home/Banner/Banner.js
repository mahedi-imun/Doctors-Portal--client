import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize:'cover',backgroundRepeat:'no-repeat'}} class="hero min-h-screen  ">
            <div class="hero-content flex-col lg:flex-row-reverse w-11/12">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='chair' />
                <div className='flex flex-col items-start text-left '>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button style={{background:'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)'}} class="btn btn-primary font-bold capitalize text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;