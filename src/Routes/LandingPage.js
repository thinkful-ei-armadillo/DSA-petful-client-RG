import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './landingPage.css'

export class LandingPage extends Component {
  render() {
    return (
      <section className="row">
        <div className="landing-container col-6">
          <h3>Online Adoption Service. You can only adopt the cat/dog that been in the shelter the longest first</h3>
          <Link to={'/adopt'}> 
            <input type='button' name='adopt' value='lets adopt'/>
          </Link>
        </div>
      </section>
    )
  }
}

export default LandingPage
