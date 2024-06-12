import React from 'react'
import Button from '@mui/material/Button';

function StaffCard() {
    return (
        <>
            <div style={{ margin: "10px", width: "auto", height: "auto", flexWrap: "wrap", display: "inline-block" }}>
                <div className='flex' style={{ padding: "16px", flexWrap: "wrap" }}>
                    <div style={{ width: "100px", height: "100px" }}>
                        <img
                            src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/pm.jpg"
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px" }}
                        />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        {/* <a className="md-headline cursor" ng-click="ViewStaff(member.id)" href=''> */}
                        <div  >
                            Lance Bogrol
                        </div>
                        <sup>
                            Admin
                        </sup>
                        {/* </a> */}
                        <div>
                            STAFF-000001
                        </div>
                        <div>
                            Administrator
                        </div>
                        <div className="md-subhead">
                            <a href="tel:+1-202-555-0160">
                                +1-202-555-0160
                            </a>
                        </div>
                        <div className="md-subhead">
                            <a href="tel:lance@example.com" >
                                lance@example.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex' style={{ justifyContent: "flex-end" }}>
                    <Button variant="text" style={{ color: 'black' }}>
                        View
                    </Button>
                </div>
            </div>

        </>
    )
}

export default StaffCard