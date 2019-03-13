import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="major">Projects</h2>
                
                <span className="image main"><img src={this.props.pic02} alt="" /></span>
                <h3>GunSafe </h3>
                <section>             
                    <p>GunSafe is a CMS for firearm enthusiasts to store information about their firearms, in case anything ever gets lost, sold, or stolen. Useful for filing insurance claims, police reports, or just keeping track of inventory!</p>
                    <h4><a href="http://gunsafe.herokuapp.com">View App</a></h4> 
                    <p>(Log in with username 'Guest' & password 'test' for mock data)</p>
                    <h4 className="major">Technologies Used</h4>
                    <ul>
                        <li>Rails</li>
                        <li>JavaScript</li>
                        <li>ActiveRecord</li>
                        <li>AJAX</li>
                        <li>jQuery</li>
                        <li>OmniAuth</li>
                        <li>PostgreSQL</li>
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}