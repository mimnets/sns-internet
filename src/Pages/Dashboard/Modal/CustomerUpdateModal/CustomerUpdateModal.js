import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const CustomerUpdateModal = ({customers, customerId}) => {
    const {loading} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [customerUpdateInfo, setCustomerUpdatedInfo] = useState();
    const customer = customers?.find(customer => customer._id === customerId);

    // console.log(customerUpdateInfo);
    
    if(loading) {
        return <Loader></Loader>
    }

    const handleUpdateCustomer = data => {
        const customerUpdates = {
            name: data.name,
            ip: data.ip,
            mobile: data.mobile,
            address: data.address,
            mb: data.mb,
            price: data.price,
            connection_date: data.connection_date
        }

        const customerNewInfo = {...customer, customerUpdates}
        console.log(customer, customerNewInfo)
        setCustomerUpdatedInfo(customerNewInfo)
        
        fetch(`http://localhost:5000/customers/${customerId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(customerUpdateInfo),
        })
        .then(resp => resp.json())
        .then(result =>{
            // console.log(result)
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
                                    className="input input-bordered w-full max-w-xs"  defaultValue={customer?.name}/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">IP</span></label>
                                <input type="number"
                                    {...register("ip")}
                                    className="input input-bordered w-full max-w-xs"   defaultValue={customer?.ip}/>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Mobile</span></label>
                                <input type="number"
                                    {...register("mobile")}
                                    className="input input-bordered w-full max-w-xs"  defaultValue={customer?.mobile} />
                                {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Address</span></label>
                                <input type="text"
                                    {...register("address")}
                                    className="input input-bordered w-full max-w-xs"   defaultValue={customer?.address}/>
                                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Bandwidth / MB</span></label>
                                <input type="number"
                                    {...register("mb")}
                                    className="input input-bordered w-full max-w-xs"   defaultValue={customer?.mb}/>
                                {errors.mb && <p className="text-red-500">{errors.mb.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Price</span></label>
                                <input type="number"
                                    {...register("price")}
                                    className="input input-bordered w-full max-w-xs"   defaultValue={customer?.price}/>
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
                                <input className='btn btn-accent mt-4' value="Update" type="submit" />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default CustomerUpdateModal;