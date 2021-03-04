import React from 'react'
import { useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faMediumM, faFacebook } from '@fortawesome/free-brands-svg-icons'

import SectionHeading from '../SectionHeading/SectionHeading'

import './Footer.Styles.scss'

export const Footer = () => {
    const location = useLocation()

    const style = {
        color: `${location.pathname === '/' ? 'white' : 'black'}`
    }
    
    return (
        <div className='footer'>
            <div className='links' style={{
                background: `${location.pathname === '/' ? '#161616' : 'white'}`,
                color: `${location.pathname === '/' ? 'white' : 'black'}`
            }}>
                <p className='follow-us'>Follow us</p>
                <SectionHeading heading={[
                    <a style={style} key='medium-link' className='icon' href='https://medium.com/@tec_vit' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='medium' icon={faMediumM} />
                    </a>,
                    <a style={style} key='linkedin-link' className='icon' href='https://www.linkedin.com/company/the-electronics-club-vit/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
                    </a>,
                    <a style={style} key='instagram-link' className='icon' href='https://www.instagram.com/tec.vit/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='instagram' icon={faInstagram} />
                    </a>,
                    <a style={style} key='github-link' className='icon' href='https://www.facebook.com/tec.vit/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='github' icon={faFacebook} />
                    </a>,
                ]} dark={location.pathname === '/' ? true : false} />
            </div>
        </div>
    )
}
