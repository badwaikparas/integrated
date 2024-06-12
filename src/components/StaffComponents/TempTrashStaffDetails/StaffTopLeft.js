import React from 'react'

function StaffTopLeft() {
    return (
        <>
            {/* <div>
                <img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/staffmember_bg.png" src="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/staffmember_bg.png" alt='bg'></img>
                <div style={{ width: "100px", height: "100px", position: 'relative', top: "-50%" }}>
                    <img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/emma.jpg" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/emma.jpg" style={{ width: "inherit", borderRadius: "5px", position: 'relative', top: "-50%", left: "20px" }}></img>
                </div>
            </div> */}
            <div>
                <img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/staffmember_bg.png" src="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/staffmember_bg.png" alt='bg'></img>
                <div style={{ width: "100px", height: "100px", position: 'absolute', }}>
                    <img alt="" ng-src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/emma.jpg" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/emma.jpg" style={{ width: "inherit", borderRadius: "5px", position: 'absolute', top: "-50%", left: "20px" }}></img>
                </div>
            </div>
            {/* <div>
                <img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/staffmember_bg.png" src="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/staffmember_bg.png" alt='bg'></img>
                <img alt="" ng-src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/emma.jpg" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/emma.jpg" style={{ width: "inherit", }}></img>
            </div> */}
            <div>
                <div>Emma Durst</div>
                <div>STAFF-000002</div>
                <div>Sales Agent</div>
            </div>

            <div>+1-202-555-0158</div>
            <div>70 Bowman St. South Windsor, CT 06074</div>
            <div>emma@example.com</div>

            <div>
                <div>
                    <div>Sales</div>
                    <div>₹0.00</div>
                </div>
                <div>
                    <div>Customers</div>
                    <div>0</div>
                </div>
                <div>
                    <div>Tickets</div>
                    <div>0</div>
                </div>
            </div>



        </>
    )
}

export default StaffTopLeft