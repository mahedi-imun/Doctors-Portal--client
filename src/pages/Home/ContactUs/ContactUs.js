import React from 'react';
import { useForm } from "react-hook-form";
import background from '../../../assets/images/appointment.png'
const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (contactData) => {
        console.log(contactData);
    }
    return (
        <div className=' my-24 p-12'  style={{ background: `url(${background})` }}>
            <div className='text-center'>
                <h3 className='text-primary font-bold text-2xl'>Contact Us</h3>
                <h4 className='text-white text-4xl'>Stay connected with us</h4>
            </div>
            <div className='lg-w-[50%] w-full mx-auto '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <input className='p-2 rounded mt-4 lg:w-[450px] w-[100%] mx-auto' placeholder='Email Address' type="email" required {...register("email")} />
                        <input className='p-2 rounded mt-4 lg:w-[450px] w-[100%] mx-auto' placeholder='Subject' type="text" {...register("subject", { required: true })} />
                        <textarea className='p-2 h-24 rounded mt-4 lg:w-[450px] w-[100%] mx-auto' placeholder='Your message' type="text" {...register("message", { required: true })} />

                        <div className='text-center mt-8 '>
                            <input className='btn  bg-gradient-to-r from-secondary to-primary text-white font-bold' type="Submit" value='submit' />
                        </div>
                    </div>
                </form>
            </div>
        </div>



    );
};

export default ContactUs;