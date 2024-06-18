import React from 'react'
import '../css/TableRow.css'

function TableRow() {
    return (
        <tr>
            {/* /// Proposal */}
            <td>
                <strong>
                    <strong>
                        {/* <a href="#"> */}
                        <span className='proposal-id'>PRO-16</span>
                        {/* </a> */}
                    </strong>
                    <br />
                    <small className='proposal-subject'>adasdd</small>
                </strong>
            </td>

            {/* /// Customer / Lead */}
            <td>
                <strong>
                    <span className='customer-span'>Sohail Sheikh</span>
                </strong>
                <br />
                <small>Sohail@gmail.com</small>
            </td>

            {/* /// Date */}
            <td>
                <strong>
                    <span className='date-span'>30.05.2024</span>
                </strong>
            </td>

            {/* /// Open Till */}
            <td>
                <strong>
                    <span className='date-span'>18.06.2024</span>
                </strong>
            </td>

            {/* /// Status */}
            <td>
                <span className='declined'>Sent</span>
            </td>

            {/* /// Amount */}
            <td>
                <strong className='amount-strong'><span>₹100,000.00</span></strong>
            </td>

            {/* /// Staff */}
            <td>
                <div className='img-div flex'>
                    <img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/FB_IMG_16807076318521974.jpg" alt="Admin" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/FB_IMG_16807076318521974.jpg" className='user-avatar' />
                </div>
            </td>

        </tr>
    )
}

export default TableRow


