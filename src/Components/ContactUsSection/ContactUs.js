import React, { Component } from 'react'

import './ContactUs.Styles.scss'

export default class ContactUs extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email: '',
            message: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name, email, message} = e.target
        this.setState({
            name: name.value,
            email: email.value,
            message: message.value
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <section className='contact-us-section'>
                <div className='links'>
                    <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'>Join</a>
                    <a href='mailto:yashjustyash@outlook.com' target='_blank' rel='noopener noreferrer'>Contact</a>
                </div>
                <div className='content'>
                    <div className='heading'>
                        <h1>Reach out to us!</h1>
                        <h3>Tell us something cool!</h3>
                    </div>
                    <form className='message-form' onSubmit={this.handleSubmit}>
                        <input name='name' type='text' placeholder='Enter your name' required />
                        <input name='email' type='email' placeholder='Enter your Email id' required />
                        <textarea name='message' rows='5' placeholder='Enter your message...' required />
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </section>
        )
    }
}
