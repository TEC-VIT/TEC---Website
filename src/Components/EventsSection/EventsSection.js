import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

import './EventsSection.Styles.scss'

const EventsSection = ({events, upcomingEvents}) => {
    return (
        <section className='events-section'>
            <SectionHeading heading='Events' />
        </section>
    )
}

export default EventsSection