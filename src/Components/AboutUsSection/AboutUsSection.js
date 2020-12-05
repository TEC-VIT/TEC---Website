import React from 'react'

import SectionHeading from '../SectionHeading/SectionHeading'
import AboutUsWorkCard from '../AboutUsWorkCard/AboutUsWorkCard'

import aboutUsVideo from '../../Assets/AboutUs.mp4'
import ourVisionImage from '../../Assets/AboutUs.jpg'

import './AboutUsSection.Styles.scss'

const AboutUsSection = ({aboutUs}) => {
    const works = [
        {
            id: 1,
            label : "members",
            number : 45
        },
        {
            id :2,
            label : "projects",
            number : 76
        },
        {
            id : 3,
            label : "sessions",
            number : 34
        },
        {
            id : 4,
            label : "events",
            number : 200
        }
    ]
    return (
        <section className='about-us-section'>
            <SectionHeading heading='About Us' />
            <div className='about-us'>
                <div className='video-container'>
                    <video className='video' autoPlay loop muted>
                        <source type='video/mp4' src={aboutUsVideo} />
                    </video>
                </div>
                <div className='about-us-text'>
                    <h1>About Us</h1>
                    <p>We believe that the success of any organization depends on the unity amongst the people in it. TEC is a well-knit group of 81 members and through regular group discussions and meetings, the smooth working of the club is ensured.
                    Our intense work is well complemented with some fun. This is done by organizing a few trips and parties round the year.
                    Our motto of helping others learn is further strengthened as the seniors act as mentors for the juniors. In addition to this, several sessions are also kept for the junior members of the club that enable them further to achieve their dreams.
                    The Electronics Club of VIT does not tell you what your goals should be, but surely helps you to move closer to them.</p>
                </div>
            </div>
            <div className='our-vision'>
                <div className='our-vision-text'>
                    <h1>Our Vision</h1>
                    <p>We believe that the success of any organization depends on the unity amongst the people in it. TEC is a well-knit group of 81 members and through regular group discussions and meetings, the smooth working of the club is ensured.
                    and through regular group discussions and meetings, the smooth working of the club is ensured.
                    Our intense work is well complemented with some fun. This is done by organizing a few trips and parties round the year.
                    </p>
                </div>
                <img className='image' src={ourVisionImage} alt='ourVision' />
            </div>
            <div className='our-work'>
                {works.map(data => <AboutUsWorkCard key={data.id} label={data.label} number={data.number} />)}
            </div>
        </section>
    )
}

export default AboutUsSection