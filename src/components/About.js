import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
        <React.Fragment>
            <h2 className="major">About</h2>

            <span className="image profile"><img src={this.props.pic} alt="" /></span>
            
            <p>As a Flatiron School graduate, I've been developing with Ruby, Rails, and Javascript for over a year, striving to learn as much as I can about being a full stack web developer; passionate about building clean, modern, intuitive web applications. Technical problems with "right answers" are my jam - I gravitate towards complex, nuanced, deep hobbies like programming and long-range shooting. Yes, I also specialize in hitting small things with projectiles from really far away. Under time pressure in a match, I've hit a 12' target from 315 yards on the first shot with a Ruger 10/22 rifle - which I built myself.</p>

            <p>In under a year of study, and with no prior experience, my quick learning and adaptability propelled me to first in the state at the 2010 SkillsUSA electronics competition in Utah.  More recently, I managed the cellar of a winery, and again, I was able to succeed thanks to my ability to innately grasp complex concepts and learn specialized knowledge.  I also built a fully functioning web application from the ground up, both back and front end. It's called GunSafe!</p>

            <p>I love to iterate, improve, and introspect. I'm actively programming and building projects while I look for the perfect entry point into my career in web development, and I'm always interested in learning a new framework or contributing to open source! </p>
        </React.Fragment>
        )
    }
}