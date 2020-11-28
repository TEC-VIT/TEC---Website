import React from 'react';

import './EventsCard.Styles.scss'

const EventsCard = ({event}) => {
    return (
        <div className='card'>
            <h1>{event.title}</h1>
            <p>{event.body}</p>
        </div>
    )
}

export default EventsCard
