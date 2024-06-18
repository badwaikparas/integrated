import React from 'react'

function CronJob() {
    return (
        <>
            <div>
                <div>Cron Job Link</div>
                <div>https://rainbowsoftwaresolutions.com/advancecrm/CronJob/run</div>
            </div>
            <br />
            <div>
                <div>Recommended execution interval.</div>
                <div>Every 1 Hour</div>
            </div>
            <br />
            <div>
                <div>cPanel Cron Job Command *</div>
            </div>
            <br />

            <div style={{ padding: "20px", background: "black", color: "orange", borderRadius: "10px" }}>wget https://rainbowsoftwaresolutions.com/advancecrm/CronJob/run</div>
            <br />
            <div style={{ padding: "20px", background: "black", color: "orange", borderRadius: "10px" }}>wget https://rainbowsoftwaresolutions.com/advancecrm/CronJob/emails</div>
            <br />
            <hr />
            <br />
            <div style={{ padding: "20px", background: "black", color: "orange", borderRadius: "10px" }}><span style={{ color: 'red' }}>or </span>wget -q -O- https://rainbowsoftwaresolutions.com/advancecrm/CronJob/run</div>
            <br />
            <div style={{ padding: "20px", background: "black", color: "orange", borderRadius: "10px" }}><span style={{ color: 'red' }}>or </span>wget -q -O- https://rainbowsoftwaresolutions.com/advancecrm/CronJob/emails</div>
            <br />

        </>
    )
}

export default CronJob