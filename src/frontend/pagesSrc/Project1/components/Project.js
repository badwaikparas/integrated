import React from 'react'
import '../css/Project.css'
import ProjectHeader from './ProjectHeader'
import Tiles from './Tiles'
import TabsSection from './TabsSection'

function Project() {
    return (
        <div className='flex' style={{}}>
            <div>
                <ProjectHeader />
                <Tiles />
                <TabsSection />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Project