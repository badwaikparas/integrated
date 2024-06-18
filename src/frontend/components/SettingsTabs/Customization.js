import React from 'react'
import CustomizationLeft from './CustomizationLeft'
import CustomizationRight from './CustomizationRight'

function Customization() {
    return (
        <>
            <div className='flex'>
                <CustomizationLeft />
                <CustomizationRight />
            </div>
        </>
    )
}

export default Customization