import React from 'react'

import logo from '../../Assets/userimg.png'

import './EventCard.Styles.scss'

export const EventCard = ({event}) => {
    return (
        <div className='event-card'>
            <img className='event-img' src={logo} alt='event_poster' />
            <p className='event-description'>We believe that the success of any organization depends on the unity amongst the people in it. TEC is a well-knit grou p of 81 members and through regular group discussions and meetings, the smooth working of the club is ensured</p>
        </div>
    )
}
