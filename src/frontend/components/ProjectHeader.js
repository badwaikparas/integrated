import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faCirclePlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function ProjectHeader() {
    return (
        <div className='flex' style={{ justifyContent: 'space-between', height: '64px' }}>
            <div className='flex'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    style={{ width: 20, height: 20, transformOrigin: "10px 10px 10px" }}
                >
                    <path
                        fill="none"
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap="square"
                        d="M10,1A9,9 0 1 1 1,10A9,9 0 0 1 10,1"
                        strokeDasharray="56.548667764616276"
                        strokeDashoffset="141.3716694115407"
                        transform="rotate(0 10 10)"
                    />
                </svg>
                <div>PRJ-5</div>
                <div>Demo</div>
                <div>Template Project</div>
            </div>
            <div className='flex' style={{ justifyContent: 'space-between' }}>
                <button className='button'><FontAwesomeIcon icon={faFilePdf} style={{ width: '24', height: '24' }} /></button>
                <button className='button'><FontAwesomeIcon icon={faCirclePlus} style={{ width: '24', height: '24' }} /></button>
                <button className='button'><FontAwesomeIcon icon={faEllipsisVertical} style={{ width: '24', height: '24' }} /></button>
            </div>
        </div>
    )
}

export default ProjectHeader