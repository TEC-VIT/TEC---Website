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
            limit: window.innerWidth >= 470 ? 6 : 3
        }
    }

    onLoadMore = async () => {
        let extraLength = 3
        await this.setState({limit: this.state.limit + extraLength > this.state.events.length ? this.state.events.length : this.state.limit + extraLength})
        if(window.innerWidth <= 470){
            var eventsContainer = document.getElementsByClassName('events-container')[0]
            eventsContainer.scrollLeft = eventsContainer.scrollWidth * ( 1 / (this.state.events.length/(this.state.limit - extraLength)))
        }
    }

    onLoadLess = () => {
        this.setState({limit: window.innerWidth >= 470 ? 6 : 3})
        if(window.innerWidth <= 470){
            var eventsContainer = document.getElementsByClassName('events-container')[0]
            eventsContainer.scrollLeft = 0
        }
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
                        this.state.events.length !== this.state.limit ? 
                            <button className='btn load-more-btn' onClick={() => {this.onLoadMore()}}>View More &#8594; </button> 
                            : <button className='btn load-more-btn' onClick={() => {this.onLoadLess()}}>View Less &#8592; </button>
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