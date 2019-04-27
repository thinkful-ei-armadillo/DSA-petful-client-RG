import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <h3>Online Adoption Service. You can only adopt the cat/dog that been in the shelter the longest first</h3>
        <Link to={'/adopt'}> 
          <input type='button' name='adopt' value='lets adopt'/>
        </Link>
      </div>
    )
  }
}

export default LandingPage
