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
            upcomingEvents:UpcommingEvents,
            limit: 6
        }
    }

    onLoadMore = () => {
        let extraLength = window.innerWidth >= 470 ? 3 : 5
        this.setState({limit: this.state.limit + extraLength > this.state.events.length ? this.state.events.length : this.state.limit + extraLength})
    }

    render(){
        return (
            <section className='events-section'>
                <SectionHeading heading='Events' />
                <div className='events'>
                    <div className='events-container'>
                    {
                        this.state.events.slice(0, this.state.limit).map((event, index) => <EventCard key={index+1} event={event} />)
                    }
                    </div>
                    { this.state.upcomingEvents.length ? <UpcomingEventsCard upcomingEvents={this.state.upcomingEvents} /> : null}
                </div>
                <div className='buttons'>
                    {
                        this.state.events.length !== this.state.limit ? <button className='btn load-more-btn' onClick={() => {this.onLoadMore()}}>Load More &#8594; </button> : null
                    }
                    { this.state.upcomingEvents.length ? <Link to='/events'><button className='btn upcomming-sessions-btn'>Upcoming Sessions &#8594;</button></Link> : null }
                </div>
                <div className='circle-1'>
                    <CircleSmall />
                </div>
            </section>
        )
    }
}

export default EventsSection