import React from 'react'
import { EventCard } from '../EventCard/EventCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import UpcomingEventsCard from '../UpcomingEventsCard/UpcomingEventsCard'

import './EventsSection.Styles.scss'

const EventsSection = ({events, upcomingEvents}) => {
    const eve = [1, 2, 3, 4]
    const eveDisplayed = upcomingEvents.length ? eve.slice(0, 3) : eve
    return (
        <section className='events-section'>
            <SectionHeading heading='Events' />
            <div className='events'>
                <div className='events-container'>
                {
                    eveDisplayed.map((event, index) => <EventCard key={index+1} event={event} />)
                }
                </div>
                { upcomingEvents.length ? <UpcomingEventsCard upcomingEvents={upcomingEvents} /> : null}
            </div>
        </section>
    )
}

export default EventsSection