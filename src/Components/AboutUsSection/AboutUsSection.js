import React, { Component } from 'react'

import SectionHeading from '../SectionHeading/SectionHeading'
import AboutUsWorkCard from '../AboutUsWorkCard/AboutUsWorkCard'

import AboutUs from '../../Assets/Data/AboutUs'

import './AboutUsSection.Styles.scss'

class AboutUsSection extends Component{
    constructor(){
        super()
        this.state = {
            aboutUs: AboutUs
        }
    }

    render(){
        return (
            <section className='about-us-section'>
                <SectionHeading heading='About Us' />
                <div className='about-us'>
                    <div className='video-container'>
                        <video className='video' autoPlay loop muted>
                            <source type='video/mp4' src={this.state.aboutUs.aboutUsVideo} />
                        </video>
                    </div>
                    <div className='about-us-text'>
                        <h1>About Us</h1>
                        <p>{this.state.aboutUs.aboutUs}</p>
                    </div>
                </div>
                <div className='our-vision'>
                    <div className='our-vision-text'>
                        <h1>Our Vision</h1>
                        <p>{this.state.aboutUs.ourVision}</p>
                    </div>
                    <img className='image' src={this.state.aboutUs.ourVisionImage} alt='ourVision' />
                </div>
                <div className='our-work'>
                    {this.state.aboutUs.works.map(data => <AboutUsWorkCard key={data.id} label={data.label} number={data.number} />)}
                </div>
            </section>
        )
    }
    
}

export default AboutUsSection