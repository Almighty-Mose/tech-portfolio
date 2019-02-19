import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
            <h2 className="major">Contact</h2>
            
            <form method="post" action="#">
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"></textarea>
                </div>
                
                <ul className="actions">
                    <li><input type="submit" value="Send Message" className="special" /></li>
                    <li><input type="reset" value="Reset" /></li>
                </ul>
            </form>
            
            <ul className="icons">
                <li><a href="https://www.facebook.com/almightymose" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.linkedin.com/in/branden-mosley-8a898763" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/Almighty-Mose" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </React.Fragment>
        )
    }
}