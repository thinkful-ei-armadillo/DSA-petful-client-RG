import React, { Component } from 'react';
import AdoptButton from './AdoptButton';

export class PetQueueDisplay extends Component {
  constructor(props){
    super(props);
      this.state={
        currentPet: []
      }
    }
  
  componentDidMount(){
    this.setState({
       currentPet: this.props.pets.first
    })
  }

  renderCurrentPetDisplay = (currentPet) => {
    return (
      <div className="pet-info">
        <img src={currentPet[0].imageurl} width='50' height='50' alt={currentPet[0].imagedescription}></img>
        <p>Age: {currentPet[0].age}</p>
        <p>Breed:{currentPet[0].breed} </p>
        <p>Name:{currentPet[0].name}  </p>
        <p>Sex:{currentPet[0].sex}  </p>
        <p>Story:{currentPet[0].story} </p> 
      </div>
    )
  }
  handlePetClick = (i, list, currentPet) => {
     const clickedIndex = list.filter(el => el === list[i]);
    this.setState({currentPet: clickedIndex})
  }
 
  render() {
    const {first, list} = this.props.pets;
    const { type} = this.props;
    return (
      <div className='pet-container col-12'>
        <h3>{type}</h3>
          {this.state.currentPet.length !== 0 ? this.renderCurrentPetDisplay(this.state.currentPet) : '' }
          {this.state.currentPet.length !== 0   ?
        <AdoptButton isInQueue={first[0].id !== this.state.currentPet[0].id ? false : true} id={!first[0].id ? "": first[0].id} type={type}/> : "" }
        <div className='pet-img-container'>
          {list.map((pet, i) => 
            <input type='image' onClick={() => this.handlePetClick(i, list)} 
            alt={pet.imagedescription} key={i} src={pet.imageurl} width='40' height='50'/>
          )}
        </div>
      </div>
    )
  }
}

export default PetQueueDisplay
