import React, { Component } from 'react';
import AdoptButton from './AdoptButton';

export class PetQueueDisplay extends Component {
  constructor(props){
    super(props);
      this.state={
        currentPet: {}
      }
    }

  renderCurrentPetDisplay = (currentPet) => {
    return (
      <div className="pet-info">
        <img src={currentPet.imageurl} width='50' height='50' alt={currentPet.imagedescription}></img>
        <p>Age: {currentPet.age}</p>
        <p>Breed:{currentPet.breed} </p>
        <p>Name:{currentPet.name}  </p>
        <p>Sex:{currentPet.sex}  </p>
        <p>Story:{currentPet.story} </p> 
      </div>
    )
  }
  handlePetClick = (i, list, currentPet) => {
     const clickedIndex = list.filter(el => el.id === i);
     const clicked = clickedIndex[0]
    this.setState({currentPet: clicked})
  }
 
  render() {
    const {first , list} = this.props.pets;
    const { type} = this.props;
    const currentPet = this.state.currentPet;
    return (
      <div className='pet-container col-12'>
        <h3>{type}</h3>
          {Object.entries(currentPet).length !== 0 
            ? this.renderCurrentPetDisplay(currentPet) 
            : <p>Please Select a pet</p> }
          {this.state.currentPet  
            ? <AdoptButton 
              isInQueue={first.id !== this.state.currentPet.id ? false : true} 
              id={!first.id ? "": first.id} 
              type={type}
            /> 
            : "" }
        <div className='pet-img-container'>
          {list.map((pet, i) => 
            <input type='image' 
              onClick={() => this.handlePetClick(pet.id, list)} 
              alt={pet.imagedescription}
              key={i} 
              src={pet.imageurl} 
              width='40' 
              height='50'
            />
          )}
        </div>
      </div>
    )
  }
}

export default PetQueueDisplay
