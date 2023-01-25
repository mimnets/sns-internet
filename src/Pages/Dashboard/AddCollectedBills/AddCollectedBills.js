import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddCollectedBills = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleAddBills = data=>{
        const bill = {
            user: user.email,
            ip: data.ip,
            money_receipt: data.money_receipt,
            received_money: data.received_money,
            bill_month: data.bill_month,
            collection_date: data.collection_date,
            remarks: data.remarks
        }

        // console.log(bill);
    
        fetch('http://localhost:5000/bills',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(bill),
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            navigate('/dashboard/bill-collect')
        })
    }

    return (
        <div className='mt-10 p-5'>
            <h3 className="text-4xl">Add A Bill</h3>
            <form onSubmit={handleSubmit(handleAddBills)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">IP</span></label>
                    <input type="number"
                        {...register("ip", { required: "IP must be provided" })}
                        className="input input-bordered w-full max-w-xs" />
                        {errors.ip && <p className="text-red-500">{errors.ip.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Book-Receipt No</span></label>
                    <input type="text"
                        {...register("money_receipt", { required: "Money receipt number must be provided" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.money_receipt && <p className="text-red-500">{errors.money_receipt.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Amount Received</span></label>
                    <input type="number"
                        {...register("received_money", { required: "Received amount must be provided" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.received_money && <p className="text-red-500">{errors.received_money.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Bill Of Month</span></label>
                    <input type="text"
                        {...register("bill_month", { required: "Mobile must be provided" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.collection_date && <p className="text-red-500">{errors.collection_date.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Collection Date</span></label>
                    <input type="date"
                        {...register("collection_date", { required: "Mobile must be provided" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.collection_date && <p className="text-red-500">{errors.collection_date.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Remarks / Comments</span></label>
                    <input type="text"
                        {...register("remarks")}
                        className="input input-bordered w-full max-w-xs" />
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
                    <input className='btn btn-accent mt-4' value="Add Bill" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddCollectedBills;