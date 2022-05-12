import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
const Signup = () => {
    let errorElement;
    const navigate = useNavigate()
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { name, email, password } = data
        console.log(data);
         await createUserWithEmailAndPassword(email, password,);
         await updateProfile({ displayName:name })

    }
    if (loading || googleLoading) {
        return <Loading></Loading>

    }
    if (error || googleError) {
        errorElement = <p className='text-red-600'>{error?.message || googleError?.message}</p>

    }

    if (googleUser || user) {
        // navigate("/")
        console.log( '' , user);

    }
    return (
        <div className=' flex min-h-[80vh] justify-center items-center'>
            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title justify-center ">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>

                        <input
                            type="text" className="input  input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                },
                            })}

                        />
                        {errors?.name?.type === 'required' && <span className=' label-text-alt text-red-700'>{errors?.name?.message}</span>}
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>

                        <input
                            type="email" className="input  input-bordered w-full max-w-xs"
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

                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input

                            type="password" className="input  input-bordered 
                            
                            w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'

                                },
                                minLength: {
                                    value: 6,
                                    message: 'provide must be 6 character'
                                }

                            })}


                        />
                        {errors.password?.type === 'required' && <span className='  text-red-700'> {errors?.password.message} </span>}
                        {errors.password?.type === 'minLength' && <span className='  text-red-700'>{errors.password.message}</span>}

                        {errorElement}
                        <input type="submit" value='Sign Up' className=" btn  mt-3  w-full max-w-xs bg-accent text-white text-xl cursor-pointer" />
                    </form>
                    <span className=' ml-3'> Already have an account?
                        <NavLink className=' text-secondary' to='/login'> Login</NavLink>
                    </span>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline bg-white  w-full max-w-xs  ">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Signup;