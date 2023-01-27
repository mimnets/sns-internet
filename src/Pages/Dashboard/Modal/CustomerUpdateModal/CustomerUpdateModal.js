import React from 'react';
import { useForm } from 'react-hook-form';

const CustomerUpdateModal = ({customerId}) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(customerId)

    const handleUpdateCustomer = data => {
        const customer = {
            name: data.name,
            ip: data.ip,
            mobile: data.mobile,
            address: data.address,
            mb: data.mb,
            price: data.price,
            connection_date: data.connection_date
        }
        
        fetch(`http://localhost:5000/customer${customerId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(customer),
        })
        .then(resp => resp.json())
        .then(result =>{
            console.log(result)
        })
    }


    return (
        <div className='flex justify-center justify-items-center'>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="customer-update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="customer-update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <div className=''>

                        <form onSubmit={handleSubmit(handleUpdateCustomer)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="text"
                                    {...register("name")}
                                    className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">IP</span></label>
                                <input type="number"
                                    {...register("ip")}
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
                            <div className="form-control w-full max-w-xs">
                                <input className='btn btn-accent mt-4' value="Add Customer" type="submit" />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default CustomerUpdateModal;