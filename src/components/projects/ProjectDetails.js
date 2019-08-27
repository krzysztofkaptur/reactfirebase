import React from 'react'

export default function ProjectDetails(props) {
    const { id } = props.match.params
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - { id }</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto sed quia cum ipsa deleniti recusandae alias maxime corporis perspiciatis molestias illum sequi mollitia quidem suscipit, expedita ut consectetur! Illum sequi blanditiis doloribus fugit aperiam impedit a ea quis quaerat molestias nemo, quia, assumenda obcaecati fugiat, neque esse facere quas!</p>
                </div>
                <div className="card-actioon grey lighten-4 grey-text">
                    <div>Posted by The net ninja</div>
                    <div>2nd September</div>
                </div>
            </div>
        </div>
    )
}
