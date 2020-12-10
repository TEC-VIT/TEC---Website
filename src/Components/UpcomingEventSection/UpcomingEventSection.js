import React from 'react'

import './UpcomingEventSection.Styles.scss'

const UpcomingEventSection = ({event}) => {
    return (
        <div className='upcoming-event-section'>
            <div className='img-container'>
                <img className='poster' src={event.poster} alt={event.event} />
            </div>
            <div className='registration-form-container'>
                <iframe
                    className='registration-form'
                    src="https://docs.google.com/forms/d/e/1FAIpQLScvdOGqVmcsYqPXd8WHmfMPZYKjC4UyTiLRVvN4VnpYKKDzLQ/viewform?embedded=true"
                    title='upcoming-form'
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >Loading…</iframe>
            </div>
        </div>
    )
}

export default UpcomingEventSection
