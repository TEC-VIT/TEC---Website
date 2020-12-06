import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

import './NavBar.Styles.scss'

const NavBar = () => {
    const location = useLocation()

    useEffect(()=> {
        if (location.hash) {
            scrollTo(location.hash.slice(1))
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            offset: -100,
            smooth: 'easeInOutQuart'
        })
    }

    const [visible, setVisible] = useState(true)

    var body = document.getElementById('root')
    body.addEventListener('wheel', (e) => {
        e.deltaY > 0 ? setVisible(false) : setVisible(true)
    })

    return (
        <nav className='navbar' style={{opacity: `${visible ? '1' : '0'}`, top: `${visible ? '0' : '-7rem'}`}}>
            <Link className='nav-logo' to='/'>

            </Link>
            <div className='nav-links'>
                <Link className='nav-option' to='/'>Home</Link>
                <Link className='nav-option' to="/#about-us-section">About Us</Link>
                <Link className='nav-option' to='/events'>Events</Link>
                <Link className='nav-option' to='/projects'>Projects</Link>
                <Link className='nav-option' to='/#board-section'>Board</Link>
                <Link className='nav-option' to='/#contact-us-section'>Contact Us</Link>
            </div>
        </nav>
    )
}

export  default NavBar