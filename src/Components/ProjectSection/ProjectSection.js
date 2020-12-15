import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import SectionHeading from '../SectionHeading/SectionHeading'

import './ProjectSection.Styles.scss'

const ProjectSection = ({projects}) => {

    const[index,setIndex]=useState(6);

    const handleClick = () => {
        setIndex((index) =>  index+3)
    }

    return (
        <section className='projects-section'>
            <SectionHeading heading='Projects' />
            <div className='projects'>
                <div className='projects-container'>
                    {
                        projects.map(project => <ProjectCard key={project.id} poster={project.poster} description={project.description} name={project.name}/> , index)
                        
                    }
                </div>
                
            </div>
            <button className='btn' onClick={handleClick}>Load More &#8594; </button>
        </section>
    )
}

export default ProjectSection