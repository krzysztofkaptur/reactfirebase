import React from 'react'

function ProjectSummary(props) {
    const { title, content } = props.project
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text tet-darken-3">
                <span className="card-title">{ title }</span>
                <p>{ content }</p>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary