import React, { Component } from 'react'

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
                Hello From HomePage
            </div>
        )
    }
}
