import React, { Component } from 'react'
import PetfulServices from '../Services/PetfulServices';
import PetfulContext from '../Context/petfulContext';

export class AdoptButton extends Component {
  static contextType = PetfulContext
  handleAdoptClick = (id, type) => {
    PetfulServices.adoptPet(id, type)
      .then(() => { type === 'Cat'
        ? this.context.adoptedCat(id)
        : this.context.adoptedDog(id)
      })
  }
    render() {
    const { id, type } = this.props;
    return (
      <React.Fragment>
        {this.props.isInQueue ? 
        <input type='button' name='adopt-btn' value='Adopt' onClick={() => this.handleAdoptClick(id, type)}/> : ""}
      </React.Fragment>
    )
  }
}

export default AdoptButton
