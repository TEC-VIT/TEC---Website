import React, { Component } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { scroller } from 'react-scroll'

import './NavBar.Styles.scss'

const NavBar = () => {
    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    let history = useHistory()
    const navigateToHomeAndScroll = (section) => {
        history.push('/')
        scrollTo(section)
    }

    return (
        <nav className='navbar'>
            <div className='nav-logo'>

            </div>
            <div className='nav-links'>
                <Link className='nav-option' to='/'>Home</Link>
                <span className='nav-option' onClick={() => navigateToHomeAndScroll('about-us-section')}>About Us</span>
                <Link className='nav-option' to='/events'>Events</Link>
                <Link className='nav-option' to='/projects'>Projects</Link>
                <span className='nav-option' onClick={() => scrollTo('board-section')}>Board</span>
                <span className='nav-option' onClick={() => scrollTo('contact-us-section')}>Contact Us</span>
            </div>
        </nav>
    )
}

export  default NavBar