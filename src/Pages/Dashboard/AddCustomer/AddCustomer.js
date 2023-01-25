import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const AddCustomer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const url = "http://localhost:3000/customers";
    // const { data: customers = [] } = useQuery({
    //     queryKey: ['customers'],
    //     queryFn: async () => {
    //         const res = await fetch(url)
    //         const data = await res.json();

    //         return data;
    //     }

    // })


    const handleAddCustomers = data =>{
        const customer = {
            name: data.name,
            mobile: data.mobile,
            address: data.address,
            mb: data.mb,
            price: data.price,
            connection_date: data.connection_date
        }
        
        console.log(customer);
        // Save Customers information to database
        fetch('http://localhost:5000/customers',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    }

    return (
        <div className='mt-10'>
            <h3 className="text-4xl">Add A Customer</h3>
                <form onSubmit={handleSubmit(handleAddCustomers)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Mobile</span></label>
                        <input type="number"
                            {...register("mobile", { required: "Mobile must be provided" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Address</span></label>
                        <input type="text"
                            {...register("address", { required: "Mobile must be provided" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Bandwidth / MB</span></label>
                        <input type="number"
                            {...register("mb", { required: "Mobile must be provided" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.mb && <p className="text-red-500">{errors.mb.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input type="number"
                            {...register("price", { required: "Mobile must be provided" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Connection Date</span></label>
                        <input type="date"
                            {...register("connection_date", { required: "Mobile must be provided" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.connection_date && <p className="text-red-500">{errors.connection_date.message}</p>}
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        <select className="select select-bordered w-full max-w-xs" {...register("specialty")}>
                            <option disabled selected>Please select a option</option>
                            {
                                customers.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file"
                            {...register("image")}
                            className="input input-bordered w-full max-w-xs" />
                    </div> */}
                    <input className='btn btn-accent w-full mt-4' value="Add Customer" type="submit" />
                </form>
        </div>
    );
};

export default AddCustomer;