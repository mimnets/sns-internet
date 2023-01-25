import React from 'react';
import { useQuery } from 'react-query';

const BillCollect = () => {

    const url = fetch('http://localhost:5000/bills')

    const { data: bills = [] } = useQuery({
        queryKey: 'bills',
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        },
    })
    
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>IP</th>
                        <th>Money Receipt No.</th>
                        <th>Received Amount</th>
                        <th>Billing month</th>
                        <th>Collection Date</th>
                        <th>Collected By</th>
                        <th>Remarks / Comments By</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bills?.map((bill, i) =>
                        
                            <tr>
                                <th>{i}</th>
                                <td>{bill.ip}</td>
                                <td>{bill.money_receipt}</td>
                                <td>{bill.received_money}</td>
                                <td>{bill.bill_month}</td>
                                <td>{bill.collection_date}</td>
                                <td>{bill.user}</td>
                                <td>{bill.remarks}</td>
                            </tr>
                        
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BillCollect;