import React, { Component } from 'react'
import '../HomePage/HomePage_bg.scss' 
import '../HomePage/HomePage_style.scss' 
export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
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
                <section className="navBar">
                    <li className="">Home</li>
                    <li className="">About us</li>
                    <li className="">Events</li>
                    <li className="">Projects</li>
                    <li className="">Board</li>
                    <li className="">Contact</li>
                </section>
                <section className="home">

                </section>
                <section className="about">
                    <h1>About us</h1>
                </section>
                <section className="events">
                    <h1>Events</h1>
                </section>
                <section className="projects">
                    <h1>Projects</h1>
                </section>
                <section className="board">
                    <h1>Board</h1>
                </section>
                <section className="contact">
                    <h1>Contact</h1>
                </section>

            </div>
        )
    }
}
