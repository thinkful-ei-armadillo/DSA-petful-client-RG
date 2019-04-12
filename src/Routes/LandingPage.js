import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <h3>Land</h3>
        <Link to={'/adopt'}> 
          <input type='button' name='adopt' value='lets adopt'/>
        </Link>
      </div>
    )
  }
}

export default LandingPage
