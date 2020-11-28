import React from 'react'

import ProjectsCard from '../ProjectsCard/ProjectCard'

import './ProjectCardContainer.Styles.scss'

const ProjetcsCardContainer = ({projects}) => {
    return (
        <div className='card-container'>
            {projects.map(project => <ProjectsCard key={project.id} project={project} /> )}
        </div>
    )
}

export default ProjetcsCardContainer