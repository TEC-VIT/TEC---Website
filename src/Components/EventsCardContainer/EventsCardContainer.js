import React from 'react'

import EventsCard from '../EventsCard/EventsCard'

import './EventsCardContainer.Styles.scss'

const EventsCardContainer = ({events}) => {
    return (
        <div className='card-container'>
            {events.map(event => <EventsCard key={event.id} event={event} /> )}
        </div>
    )
}

export default EventsCardContainer