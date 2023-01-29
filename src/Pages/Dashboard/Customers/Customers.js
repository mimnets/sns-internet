import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import CustomerUpdateModal from '../Modal/CustomerUpdateModal/CustomerUpdateModal';

const Customers = () => {
    const {loading} = useContext(AuthContext)

    const [customerInfo, setCustomerInfo] = useState();


    const { data: customers } = useQuery({
        queryKey: 'customers',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/customers');
            const data = await res.json();
            return data;
        },
    })

    if(loading){
        return <Loader></Loader>
    }


// console.log(customers);
    const handleCustomerId = getSelectedCustomerInfo =>{
        // console.log(id);
        setCustomerInfo(getSelectedCustomerInfo);
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* -- head -- */}
                <thead>
                    <tr>
                        <th>SL#</th>
                        <th>Name</th>
                        <th>IP</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Bandwidth / MB</th>
                        <th>Price</th>
                        <th>Connection Date</th>
                        <th>Update Info</th>
                    </tr>
                </thead>
                <tbody>
                    {/* -- row 1 -- */}
                    {
                        customers?.map((customer, i) =>
                            <tr>
                                <th>{i}</th>
                                <td>{customer.name}</td>
                                <td>{customer.ip}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.address}</td>
                                <td>{customer.mb}</td>
                                <td>{customer.price}</td>
                                <td>{customer.connection_date}</td>
                                <td>
                                    <div>
                                        {/* The button to open modal */}
                                        < label onClick={()=>handleCustomerId(customer)} htmlFor="customer-update-modal" className="btn" >Update</label >
                                    </div>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
                <CustomerUpdateModal customerInfo={customerInfo}>

                </CustomerUpdateModal>
            </div>
        </div>
    );
};

export default Customers;