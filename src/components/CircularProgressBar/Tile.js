import React from 'react'
import ProgressBar from './ProgressBar'
function Tile(props) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", border: "1px solid #EEEEEE" }}>
            <div>
                {props.context}
            </div>
            <div style={{}}>
                <ProgressBar value={props.percent} color={props.color} />
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                    <div>Amount</div>
                    <div><b>₹ 100000</b></div>
                </div>
                <div>
                    2 (67%)
                </div>
            </div>
        </div>
    )
}

export default Tile