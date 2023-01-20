import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');


    const handleSignup = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast("User created successfully!")
            })
            .catch(error => {
                // console.error(error);
                setSignUpError(error.message)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignup)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: "Email address is required." })} placeholder="email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: "Password is required." })} placeholder="password" className="input input-bordered" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already Registered, Please Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            {signUpError && <p>{signUpError}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;