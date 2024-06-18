import React from 'react'
import Tile from './Tile'

function Tiles() {
    return (
        <div className='flex' style={{ flex: 'flex-wrap' }}>
            <Tile heading="Dead Line" value="30.06.2024" />
            <Tile heading="Status" value="Started" />
            <Tile heading="Clocked Time" value="0h 0m" />
            <Tile heading="Billed" value="No" />
            <Tile heading="Clocked Amount" value="₹0.00" />
            <Tile heading="Project Value" value="₹10,000.00" />
        </div>
    )
}

export default Tiles