import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

import logo from '../../Assets/TECLogo.png'

import './NavBar.Styles.scss'

const NavBar = () => {
    const location = useLocation()
    let root=document.documentElement;
    
    window.addEventListener("click",()=>{
        if(open){root.style.setProperty('--mobdisp','flex')}
        else if(open==false){root.style.setProperty('--mobdisp','none') }
    })

    window.addEventListener("scroll",()=>{
        if(open)
        {setOpen(false)
            root.style.setProperty('--mobdisp','none')}
    })

    const [open,setOpen]=useState(false);

    useEffect(()=> {
        if (location.hash) {
            scrollTo(location.hash.slice(1))
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location])

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
                <img src={logo} alt='logo' />
            </Link>
            <div className='nav-links' >
                <Link className='nav-option' to='/'>Home</Link>
                <Link className='nav-option' to="/#about-us-section">About Us</Link>
                <Link className='nav-option' to='/#events-section'>Events</Link>
                <Link className='nav-option' to='/#projects-section'>Projects</Link>
                <Link className='nav-option' to='/#board-section'>Board</Link>
                <Link className='nav-option' to='/#contact-us-section'>Contact Us</Link>
            </div>

            <div className='nav-links_mob' >
                <Link className='nav-option1' to='/'>Home</Link>
                <Link className='nav-option1' to="/#about-us-section">About Us</Link>
                <Link className='nav-option1' to='/#events-section'>Events</Link>
                <Link className='nav-option1' to='/#projects-section'>Projects</Link>
                <Link className='nav-option1' to='/#board-section'>Board</Link>
                <Link className='nav-option1' to='/#contact-us-section'>Contact Us</Link>
            </div>            
        
            < div className={ open ? "menu open" : "menu"} onClick = {() => { setOpen(!open); }}>     
            
                <div className='hamburger'>            
                </div> 
            </ div>        
            
        </nav>
    )
}

export  default NavBar