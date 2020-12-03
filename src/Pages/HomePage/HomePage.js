import React, { Component } from 'react';

import SectionHeading from '../../Components/SectionHeading/SectionHeading';

import aboutUsVideo from '../../Assets/AboutUs.mp4'
import ourVisionImage from '../../Assets/AboutUs.jpg'

import './HomePage.Styles.scss'

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            aboutUs: {},
            upcommingEvents: [],
            events: [],
            projects: [],
            board: {}
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
            events: data.splice(0,4),
            projects: data.splice(0,4),
            upcommingEvents: [{event: "WebDev Session", time: "30-11-2020"}]
        }))

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(boardMembers => this.setState({board: boardMembers}))
    }

    render() {
        return (
            <div>
                <section className='header'>
                </section>

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
                        <div className='work'>
                            <span className='num'>45</span>
                            <p>members</p>
                        </div>
                        <div className='work'>
                            <span className='num'>78</span>
                            <p>projects</p>
                        </div>
                        <div className='work'>
                            <span className='num'>34</span>
                            <p>sessions</p>
                        </div>
                        <div className='work'>
                            <span className='num'>200</span>
                            <p>events</p>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
