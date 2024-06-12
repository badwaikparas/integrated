import React from 'react'

function Tile(props) {
    return (
        <div className='flex Tile' style={{ flex: 'flex-warp', minWidth: '150px' }}>
            <div>
                <div className='tile-head-small'>{props.heading}</div>
                <div className='tile-content-large'>{props.value}</div>
            </div>
        </div>
    )
}

export default Tile