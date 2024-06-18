import React from 'react'
import "../../css/Table.css"
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function ExpenseSummaryLeftBody(props) {
    return (
        <>
            <div className='flex' style={{ justifyContent: 'space-between' }}>
                <div className='flex w50 p20' style={{ justifyContent: "flex-start" }}>
                    <div className='flex'><AccountBalanceWalletIcon style={{ fontSize: "75px", color: "orange" }} /></div>
                    <div>
                        <div>Amount:</div>
                        <div style={{ fontSize: '26px' }}>₹1,000,000,000.00</div>
                        <div style={{ fontSize: '13px' }}>Paid via <strong>Saleem Cash</strong></div>
                    </div>
                </div>
                <div className='w50 p20' style={{ fontSize: "13px" }}>
                    <div>Title:</div>
                    <div><b>props.title</b></div>
                </div>
            </div>


            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <div className='w50 p20' style={{ fontSize: "13px" }}>
                    <div>Expense Date:</div>
                    <div><b>props.date</b></div>
                </div>
                <div className='w50 p20' style={{ fontSize: "13px" }}>
                    <div>Created:</div>
                    <div><b>props.created_date</b></div>
                </div>
            </div>
            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <div className='w50 p20' style={{ fontSize: "13px" }}>
                    <div style={{ fontSize: "11px" }}>CUSTOMER</div>
                    <div style={{ fontSize: "16px" }}><b>Nasir Sheikh</b></div>
                    <div>Nasir@gmail.com</div>
                    <div>03009681722</div>
                </div>
                <div className='w50 p20' style={{ fontSize: "13px" }}>
                    <div>Staff:</div>
                    <div><b>props.staff</b></div>
                </div>
            </div>



            <div className='summary-table'>
                <table style={{ fontSize: "13px", width: "100%", marginBottom: "30px" }}>
                    <thead>
                        <tr>
                            <th>
                                Product
                            </th>
                            <th>
                                Qty
                            </th>
                            <th>
                                Price
                            </th>
                            <th>No Tax</th>
                            <th>
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>
                                    New
                                </span>
                                <br />
                                <pre style={{ fontSize: "12px" }}>cvbnbvcx</pre>
                            </td>
                            <td>
                                1.00
                            </td>
                            <td>
                                <span>₹1,000,000,000.00</span>
                            </td>
                            <td>
                                0.00%
                            </td>
                            <td>
                                <span>₹1,000,000,000.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className='flex' style={{ justifyContent: 'space-between' }}>
                    <div className='flex'>
                        <div style={{ padding: "0 20px" }}><small style={{ fontSize: "12px" }}>SUB TOTAL</small><div style={{ fontSize: "20px" }}>₹1,000,000,000.00</div></div>
                        <div style={{ padding: "0 20px" }}><AddIcon /></div>
                        <div style={{ padding: "0 20px" }}> <small style={{ fontSize: "12px" }}>No Tax</small> <div style={{ fontSize: "20px" }}>₹0.00</div></div>
                    </div>
                    <div>
                        <small style={{ fontSize: "12px" }}>TOTAL</small>
                        <div style={{ fontSize: "20px" }}>₹1,000,000,000.00</div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ExpenseSummaryLeftBody