import React, { Component } from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import { scroller } from 'react-scroll'

import Projects from '../../Assets/Data/Projects'

import './ProjectSection.Styles.scss'

class ProjectSection extends Component {
    constructor() {
        super()
        this.state = {
            projects: Projects,
            limit: window.innerWidth >= 470 ? 6 : 3
        }
    }

    onLoadMore = () => {
        this.setState({limit: this.state.limit + 3 > this.state.projects.length ? this.state.projects.length : this.state.limit + 3})
    }

    onLoadLess = async () => {
        await scroller.scrollTo('projects-section', {
            duration: 800,
            delay: 0,
            offset: -100,
            smooth: 'easeInOutQuart'
        })
        this.setState({limit: window.innerWidth >= 470 ? 6 : 3})
    }

    render() {
        return (
            <section className='projects-section'>
                <SectionHeading heading='Projects' />
                <div className='projects'>
                    <div className='projects-container'>
                        {
                            this.state.projects.slice(0, this.state.limit).map(project => <ProjectCard key={project.id} poster={project.poster} description={project.description} name={project.name} intro={project.intro} date={project.date} />)
                        }
                    </div>
                </div>
                {
                    this.state.projects.length !== this.state.limit && this.state.projects.length >= this.state.limit ?
                    <button className='btn' onClick={() => {this.onLoadMore()}}>Load More &#8594; </button> 
                    : <button className='btn load-more-btn' onClick={() => {this.onLoadLess()}}>View Less &#8592; </button>
                }
            </section>
        )
    }
}

export default ProjectSection