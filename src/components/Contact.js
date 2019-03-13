import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        formEmailSent: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.sendMessage(
            this.state.email,
            this.state.name,
            this.state.message
        )
    }

    sendMessage(senderEmail, senderName, message) {
        const templateID = "tech_portfolio"
        window.emailjs.send('gmail', templateID, {
                senderEmail,
                senderName,
                message
            })
            .then(res => {
                this.setState({
                    formEmailSent: true
                })
            })
        //TODO: Add error handling for this function
        //TODO: Also figure out how the hell environment vars work
    }

    render() {
        const formEmailSent = this.state.formEmailSent
        let thanks

        if (formEmailSent) {
            thanks = <p>Thanks for your email!</p>
        } else {
            thanks = ""
        }

        return (
            <React.Fragment>
            <h2 className="major">Contact</h2>
            
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={this.state.name}
                        onChange={this.handleChange} 
                    />
                </div>
                
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}    
                    />
                </div>
                
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        rows="4"
                        value={this.state.message}
                        onChange={this.handleChange} 
                    />
                </div>
                
                <ul className="actions">
                    <li><input type="submit" value="Send Message" className="special" /></li>
                    <li><input type="reset" value="Reset" /></li>
                </ul>
            </form>

            {thanks}
            
            <ul className="icons">
                <li><a href="https://www.facebook.com/almightymose" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.linkedin.com/in/branden-mosley-8a898763" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/Almighty-Mose" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </React.Fragment>
        )
    }
}