import React, { Component } from 'react';

import AboutUsSection from '../../Components/AboutUsSection/AboutUsSection';
import BoardSection from '../../Components/BoardSection/BoardSection';
import ContactUs from '../../Components/ContactUsSection/ContactUs';
import EventsSection from '../../Components/EventsSection/EventsSection';
import NavBar from '../../Components/NavBar/NavBar';

import './HomePage.Styles.scss'

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            upcommingEvents: [],
            events: [],
            projects: [],
            board: [],
            scroll: 0
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
            events: data.splice(0,4),
            projects: data.splice(0,4),
            upcommingEvents: [{event: "WebDev Session", time: "30-11-2020"}, {event: "WebDev Session", time: "30-11-2020"}]
        }))

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(boardMembers => this.setState({board: boardMembers}))
    }
    
    render() {
        return (
            <div>
                <NavBar />
                <section className='header'>
                </section>

                <AboutUsSection />
                <EventsSection events={this.state.events} upcomingEvents={this.state.upcommingEvents} />
                <BoardSection boardMembers={this.state.board} />
                <ContactUs />

            </div>
        )
    }
}
