import React from 'react'

import './EventCard.Styles.scss'

const EventCard = ({event}) => {
    return (
        <div className='event-card'>
            <img className='event-img' src={event.poster} alt='event_poster' />
            <p className='event-description'>{event.body}</p>
        </div>
    )
}

export default EventCard