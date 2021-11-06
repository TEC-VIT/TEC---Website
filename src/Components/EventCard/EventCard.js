import React from 'react'

import './EventCard.Styles.scss'

const EventCard = ({event}) => {
    return (
        <div className='event-card'>
            <article className="card">
                <div className='flip-card-front'>
                    <picture className='card-background'>
                        <img className='event-img' src={event.poster} alt='event_poster' />
                        <div className='event-title'>{event.title}</div>
                    </picture>                    
                </div>
                <div className='flip-card-back'>
                    <p className='event-description'>{event.body}</p>
                </div>
            </article>
            
            
        </div>
    )
}

export default EventCard