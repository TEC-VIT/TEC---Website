import React, { Component } from 'react'

// Animations
import 'aos'

// Components
import SectionHeading from '../SectionHeading/SectionHeading'
import AboutUsWorkCard from '../AboutUsWorkCard/AboutUsWorkCard'
import { CircleSmall, Line } from '../BackgroundObjects/BackgroungObjects'

// Data
import AboutUs from '../../Assets/Data/AboutUs'

// Styles
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
                    <div data-aos="fade-right" className='video-container'>
                        <video className='video' autoPlay loop muted>
                            <source type='video/mp4' src={this.state.aboutUs.aboutUsVideo} />
                        </video>
                    </div>
                    <div data-aos="fade-left" className='about-us-text'>
                        <h1>About Us</h1>
                        <p>{this.state.aboutUs.aboutUs}</p>
                    </div>
                </div>
                <div className='our-vision'>
                    <div data-aos="fade-right" className='our-vision-text'>
                        <h1>Our Vision</h1>
                        <p>{this.state.aboutUs.ourVision}</p>
                    </div>
                    <img data-aos="fade-left" className='image' src={this.state.aboutUs.ourVisionImage} alt='ourVision' />
                </div>
                <div className='our-work'>
                    {this.state.aboutUs.works.map(data => <AboutUsWorkCard key={data.id} label={data.label} number={data.number} />)}
                </div>
                <div className='circle-1'>
                    <CircleSmall />
                </div>
                <div className='circle-2'>
                    <CircleSmall />
                </div>
                <div className='line'>
                    <Line />
                </div>
            </section>
        )
    }
    
}

export default AboutUsSection