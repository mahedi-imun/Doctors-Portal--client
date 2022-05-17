
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctors = () => {
    const imgBb_api = 'cae244778762f3980436c7cf98028784';
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))
    const onSubmit = async (data) => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgBb_api}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        position: data.specialist,
                        email: data.email,
                        img: img
                    }
                    // post data base 
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                           if(inserted.insertedId){
                               reset()
                               toast.success('successfully added ')
                           }
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex min-h-[80vh] justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className="card-title justify-center ">add doctors</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='doctor name'
                            type="text" className="input  input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                },
                            })}

                        />
                        {errors?.name?.type === 'required' && <span className=' label-text-alt text-red-700'>{errors?.name?.message}</span>}
                        <input placeholder='doctor email'
                            type="email" className="input  input-bordered w-full max-w-xs mt-3"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                    message: 'provide a valid email'
                                }
                            })}
                        />
                        {errors.email?.type === 'required' && <span className=' label-text-alt text-red-700'>{errors?.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className=' label-text-alt text-red-700'>{errors?.email.message}</span>}
                        <select {...register("specialist")} class="select input-bordered w-full max-w-xs mt-3">
                            {
                                services.map(service => <option
                                    key={service?._id}
                                    value={service?.name}
                                >{service?.name}</option>)
                            }
                        </select>
                        <input placeholder='doctor email'
                            type="file" className="   input-bordered w-full max-w-xs mt-3"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                }

                            })}
                        />
                        {errors.image?.type === 'required' && <span className=' label-text-alt text-red-700'>{errors?.image.message}</span>}

                        <input type="submit" value='ad' className=" btn  mt-3  w-full max-w-xs bg-accent text-white text-xl cursor-pointer" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;