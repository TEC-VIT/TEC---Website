import React from 'react'
import { Link } from 'react-router-dom'

import './UpcomingEventsCard.Styles.scss'

const UpcomingEventsCard = ({upcomingEvents}) => {
    return (
        <div className='upcoming-events-container'>
            <h1 className='heading'>Upcoming events</h1>
            <div className='upcoming-events'>
                {
                    upcomingEvents.map((event, index) => 
                        <div key={index+1} className='upcoming-event'>
                            <h1>{event.event}</h1>
                            <h3>{event.time}</h3>
                        </div>
                    )
                }
                <Link to='/events' className='arrow-btn'>&#62;</Link>
            </div>
        </div>
    )
}

export default UpcomingEventsCard