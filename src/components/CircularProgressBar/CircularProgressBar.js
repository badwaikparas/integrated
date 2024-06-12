import 'react-circular-progressbar/dist/styles.css';
import Tile from './Tile';

import React from 'react'

function CircularProgressBar4() {
    return (
        <div style={{ display: "flex", justifyContent: 'start' }}>
            <Tile context={"Total Purchases"} percent={30} color="#000" />
            <Tile context={"Paid"} percent={75} color="#22c39e" />
            <Tile context={"Unpaid"} percent={15} color="#f52f24" />
            <Tile context={"Over Due"} percent={90} color="#767676" />
        </div>
    )
}

export default CircularProgressBar4