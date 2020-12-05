import React, { Component } from 'react';

import AboutUsSection from '../../Components/AboutUsSection/AboutUsSection';
import BoardSection from '../../Components/BoardSection/BoardSection';

import './HomePage.Styles.scss'

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            aboutUs: {},
            upcommingEvents: [],
            events: [],
            projects: [],
            board: [],
            scroll: 0
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

                <AboutUsSection aboutUs={this.state.aboutUs} />
                <BoardSection boardMembers={this.state.board} />

            </div>
        )
    }
}
