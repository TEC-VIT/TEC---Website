import React from 'react';

import './ProjectCard.Styles.scss'

const ProjectsCard = ({project}) => {
    return (
        <div className='card'>
            <h1>{project.title}</h1>
            <p>{project.body}</p>
        </div>
    )
}

export default ProjectsCard
