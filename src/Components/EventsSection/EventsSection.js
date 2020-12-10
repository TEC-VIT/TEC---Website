import React from 'react'
import { Link } from 'react-router-dom'
import { EventCard } from '../EventCard/EventCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import UpcomingEventsCard from '../UpcomingEventsCard/UpcomingEventsCard'

import './EventsSection.Styles.scss'

const EventsSection = ({events, upcomingEvents}) => {
    const eve = [1, 2, 3, 4, 5]
    return (
        <section className='events-section'>
            <SectionHeading heading='Events' />
            <div className='events'>
                <div className='events-container'>
                {
                    eve.map((event, index) => <EventCard key={index+1} event={event} />)
                }
                </div>
                { eve.length ? <UpcomingEventsCard upcomingEvents={upcomingEvents} /> : null}
            </div>
            <Link to='/events'><button className='btn'>Upcoming Sessions &#8594;</button></Link>
        </section>
    )
}

export default EventsSection