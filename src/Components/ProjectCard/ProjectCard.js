import React from 'react'



import './ProjectCard.Styles.scss'

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <article className="card">
                <div className='flip-card-front'>
                    <picture className='card-background'>
                        <img className='project-img' src={props.poster} alt={'project poster'} />
                    </picture>                    
                    <h1 className='project-name'>{props.name} </h1>
                </div>
                <div className='flip-card-back'>
                    <p className='project-description'>{props.description}</p>
                </div>
                
            </article>
            
        </div>
    )
}

export default ProjectCard