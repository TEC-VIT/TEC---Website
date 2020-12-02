import React, { Component } from 'react'
import '../HomePage/HomePage.scss' 

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
                <div className="navBar">
                    <li className="">Home</li>
                    <li className="">About us</li>
                    <li className="">Events</li>
                    <li className="">Projects</li>
                    <li className="">Board</li>
                    <li className="">Contact</li>
                </div>
                <div className="home"></div>
                <div className="about"></div>
                <div className="events"></div>
                <div className="projects"></div>
                <div className="board"></div>
                <div className="contact"></div>
            </div>
        )
    }
}
