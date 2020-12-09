import React, { Component } from 'react'

import SectionHeading from '../../Components/SectionHeading/SectionHeading'

import img from '../../Assets/upcomingevent.jpg'

import './EventsPage.scss'

class EventsPage extends Component {
    render() {
        return (
            <div className='events-page'>
                <SectionHeading heading='Upcoming Sessions' />
                <img src='img' alt='upcomingevent.jpg' />
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvdOGqVmcsYqPXd8WHmfMPZYKjC4UyTiLRVvN4VnpYKKDzLQ/viewform?embedded=true" title='upcoming-form' width="544" height="440" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        )
    }
}

export default EventsPage