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
                    <div className='project-details'>                  
                        <h1 className='project-name'>{props.name} </h1>
                        <h3 className='project-intro'>{props.intro}</h3>
                        <h4 className='project-date'>Date Created: {props.date}</h4>
                    </div>
                </div>
                <div className='flip-card-back'>
                    <p className='project-description'>{props.description}</p>
                    {
                        // <button className='btn' onClick={myFunction}>View Project &#8594; </button>
                    }
                </div>
                
            </article>
            
        </div>
    )
}

export default ProjectCard