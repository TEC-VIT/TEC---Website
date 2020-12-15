import React, { Component } from 'react'


import './ContactUs.Styles.scss'

const axios=require('axios').default

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
          

        /*axios({
            method: 'post',
            url: '/adduser',
            data:[ {
               "name":name,
               "email":email,
               "message":message
            }]
          });*/
        
            
        

        this.setState({
            name: name.value,
            email: email.value,
            message: message.value
        }, () => {
            console.log(this.state)
            axios.post("http://localhost:5000/adduser",this.state)
        .then(response=>{
            name.value = ''
            email.value = ''
            message.value = ''
            document.getElementById('submit-btn').innerHTML = 'DONE!'
            document.getElementById('submit-btn').style.background = 'white'
            document.getElementById('submit-btn').style.color = '#161616'
        }) 
        .catch(err=>{
            alert('Error With Submission')
        })
        })
    }

    render() {
        return (
            <section className='contact-us-section'>
                <div className='content'>
                    <div className='heading'>
                        <h1>Reach out to us!</h1>
                        <h3>Tell us something cool!</h3>
                    </div>
                    <form className='message-form' onSubmit={this.handleSubmit}>
                        <input name='name' type='text' placeholder='Enter your name' required />
                        <input name='email' type='email' placeholder='Enter your Email id' required />
                        <textarea name='message' rows='5' placeholder='Enter your message...' required />
                        <button id='submit-btn' type='submit'>SUBMIT</button>
                    </form>
                </div>
            </section>
        )
    }
}
