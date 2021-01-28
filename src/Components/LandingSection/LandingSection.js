import React from 'react'
import { Link } from 'react-router-dom'
import 'aos'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Styles
import './LandingSection.Styles.scss'

const LandingSection = () => {
    // Click to Scroll Funtion
    const handleClick = () => {
        window.scrollTo({top:window.innerHeight, behavior: "smooth"})
    }
    
    return (
        <div className='landing-section'>
            <div className='heading' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <h1 className='heading-primary'>The Electronics Club</h1>
                <h3 className='heading-secondary'>Vellore Institute of Technology</h3>
                <Link to='/events'><button className='heading-btn'>Upcoming Events <FontAwesomeIcon className='icon' icon={faChevronRight} /></button></Link>
            </div>
        </div>
    )
}


export default LandingSection