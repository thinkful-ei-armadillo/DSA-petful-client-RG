import React, { Component } from 'react'

export class AdoptButton extends Component {
    render() {
    return (
      <React.Fragment>
        {this.props.isInQueue ? 
        <input type='button' name='adopt-btn' value='would you like to adopt' onClick={this.handleAdpotClick}/> : ""}
      </React.Fragment>
    )
  }
}

export default AdoptButton
