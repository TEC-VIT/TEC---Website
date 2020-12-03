import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import EventsCardContainer from '../../Components/EventsCardContainer/EventsCardContainer';
import ProjetcsCardContainer from '../../Components/ProjectsCardContainer/ProjectCardContainer';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';

import './HomePage.Styles.scss'

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            upcommingEvents: [],
            events: [],
            projects: [],
            board: {}
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
            events: data.splice(0,4),
            projects: data.splice(0,4),
            upcommingEvents: [{event: "WebDev Session", time: "30-11-2020"}]
        }))

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(boardMembers => this.setState({board: boardMembers}))
    }

    render() {
        return (
            <div>
                <section className='header'>
                </section>

                <section className='about-us-section'>
                    <SectionHeading heading='About Us' />
                </section>

                <section className='events-section'>
                    <h1>Events</h1>
                    <EventsCardContainer events={this.state.events} />
                    <Link to='/events'><button>Events</button></Link>
                </section>

                <section className='projects-section'>
                    <h1>Projects</h1>
                    <ProjetcsCardContainer projects={this.state.projects} />
                    <Link to='/projects'><button>Projects</button></Link>
                </section>

                <section className='board-section'>
                    <h1>Meet the board</h1>
                </section>

                <section className='footer'>
                    <h1>Contact us</h1>
                </section>
            </div>
        )
    }
}
