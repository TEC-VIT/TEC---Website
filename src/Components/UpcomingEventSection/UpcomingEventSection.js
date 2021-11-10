import React from 'react'

import './UpcomingEventSection.Styles.scss'

const UpcomingEventSection = ({event}) => {
    return (
        <div className='upcoming-event-section'>
            <div className='img-container'>
                <img className='poster' src={event.poster} alt={event.event} />
            </div>
            {
                event.registration ? <RegistrationForm link={event.registration} /> : <EventDetails details={event.details} />
            }
        </div>
    )
}

const RegistrationForm = ({link}) => {
    return(
        <div className='registration-form-container'>
            <iframe
                className='registration-form'
                src={link}
                title='upcoming-form'
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
            >Loading…</iframe>
        </div>
    )
}

const EventDetails = ({details}) => {
    return(
        <div className='event-details'>
            {details}
        </div>
    )
}

export default UpcomingEventSection
