import React from 'react'
import '../css/Project.css'
import ProjectHeader from '../components/ProjectHeader'
import Tiles from '../reducer/Tiles'
import TabsSection from '../components/TabsSection'
import EmailTemplates from '../components/ProjectTabs/EmailTemplates'

function ProjectPage() {
    return (
        <div className='flex' style={{}}>
            <div>
                <ProjectHeader />
                <Tiles />
                <TabsSection />
                <EmailTemplates />
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProjectPage