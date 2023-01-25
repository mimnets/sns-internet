import React from 'react';
import { useQuery } from 'react-query';

const Customers = () => {

    const { data: customers = [] } = useQuery({
        queryKey: 'customers',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/customers');
            const data = await res.json();
            return data;
        },
    })

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* -- head -- */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>IP</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Bandwidth / MB</th>
                        <th>Price</th>
                        <th>Connection Date</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Customers;