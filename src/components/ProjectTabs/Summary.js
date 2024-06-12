import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

function Summary() {
    return (
        <div>
            <div className='flex'>
                <div className='Tile'>
                    <div><b>26 day(s) <FontAwesomeIcon icon={faStopwatch} /></b></div>
                    <div className='tile-head-small'>Days Left</div>
                </div>
                <div className='Tile'>
                    <div>50%</div>
                    <div className='tile-head-small'>Completed</div>
                </div>
                <div className='Tile'>
                    <div>50%</div>
                    <div className='tile-head-small'>Completed</div>
                </div>
                <div className='Tile'>
                    <div>2</div>
                    <div className='tile-head-small'>Total Milestones</div>
                </div>
                <div className='Tile'>
                    <div>2</div>
                    <div className='tile-head-small'>Total Tasks</div>
                </div>
                <div className='Tile'>
                    <div>0</div>
                    <div className='tile-head-small' >Total Tickets</div>
                </div>
                <div className='Tile'>
                    <div>1</div>
                    <div className='tile-head-small'>Total Expenses</div>
                </div>
            </div>
            <div className='flex' style={{ flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ width: "100%", height: "40px", fontSize: '17px', display: 'flex', alignItems: 'center', borderBottom: '1px solid black' }}>DESCRIPTION</div>
                <div style={{ height: "auto", width: "100%", marginTop: "20px", wordWrap: 'break-word', whiteSpace: 'normal' }}>ddafafasssssssssssssssssssss</div>
            </div>
        </div>
    )
}

export default Summary