import React from 'react'
import { Link } from 'react-router-dom'

import 'aos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './LandingSection.Styles.scss'

const LandingSection = () => {
    const handleClick = () => {
        window.scrollTo({top:window.innerHeight, behavior: "smooth"})
    }
    return (
        <div className='landing-section'>
            <svg className='heading' viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">TEC</text>
                </symbol>
                <g className = "g-ants">
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
            </svg>
            <div className='heading-footer' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                <div className='heading-secondary'>
                    <p>The Electronics Club</p>
                    <p>Vellore Institute of Technology </p>
                </div>
                <Link to='/events'><button className='heading-btn'>Upcoming Events <FontAwesomeIcon className='icon' icon={faChevronRight} /></button></Link>
            </div>
            <FontAwesomeIcon onClick={() => handleClick()} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1500" className='scroll-btn' icon={faChevronDown} />
        </div>
    )
}


export default LandingSection