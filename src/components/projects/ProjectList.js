import React from 'react'

import ProjectSummary from './ProjectSummary'

function ProjectList({ projects }) {
    const template = projects && projects.map(project => (
        <ProjectSummary project={ project } key={ project.id } />
    ))

    return (
        <div className="project-list section">
            { template }
        </div>
    )
}

export default ProjectList