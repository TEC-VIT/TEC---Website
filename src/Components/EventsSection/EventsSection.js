import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { CircleSmall } from '../BackgroundObjects/BackgroungObjects'

import EventCard from '../EventCard/EventCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import UpcomingEventsCard from '../UpcomingEventsCard/UpcomingEventsCard'

import Events from '../../Assets/Data/Events'
import UpcommingEvents from '../../Assets/Data/UpcomingEvents'

import './EventsSection.Styles.scss'

class EventsSection extends Component {
    constructor(){
        super()
        this.state = {
            events: Events,
            upcomingEvents:UpcommingEvents
        }
    }

    render(){
        return (
            <section className='events-section'>
                <SectionHeading heading='Events' />
                <div className='events'>
                    <div className='events-container'>
                    {
                        this.state.events.map((event, index) => <EventCard key={index+1} event={event} />)
                    }
                    </div>
                    { this.state.upcomingEvents.length ? <UpcomingEventsCard upcomingEvents={this.state.upcomingEvents} /> : null}
                </div>
                <Link to='/events'><button className='btn'>Upcoming Sessions &#8594;</button></Link>
                <div className='circle-1'>
                    <CircleSmall />
                </div>
            </section>
        )
    }
}

export default EventsSection