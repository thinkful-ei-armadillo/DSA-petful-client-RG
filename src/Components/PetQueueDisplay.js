import React, { Component } from 'react';
import AdoptButton from './AdoptButton';

export class PetQueueDisplay extends Component {
  constructor(props){
    super(props);
    this.state ={
      nextInLine: [],
      pets: [],
      currentPet: [],
    }
  }
  componentDidMount(){
    this.setState({
       nextInLine: this.props.pets.first,
       pets: this.props.pets.list,
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
  handlePetClick = (i) => {
     const clickedIndex = this.state.pets.filter(el => el === this.state.pets[i]);
     this.setState({
       currentPet: clickedIndex
     })
  }
  renderQueuedBtn =  () =>{
   
    const item = this.state.first[0] !== undefined?
    <input type='button' name='adopt-btn' value='would you like to adopt' onClick={this.handleAdpotClick}/> : '';
    return item;
  }
  render() {
    console.log(this.state.currentPet)
    const pets = this.state.pets;
    const currentPet = this.state.currentPet;
    const type = this.props.type;
    return (
      <React.Fragment>
      <div className='pet-container col-12'>
        <div className='next-prev-container'>
        </div>
        <h3>{type}s</h3>
          {this.state.currentPet.length !== 0 ? this.renderCurrentPetDisplay(currentPet) : '' }
          {this.state.nextInLine.length >0   ?
        <AdoptButton isInQueue={this.state.nextInLine[0].id !== this.state.currentPet[0].id ? false : true}/> : "" }
        <div className='pet-img-container'>
          {pets.map((pet, i) => 
            <input type='image' onClick={() => this.handlePetClick(i)} alt={pet.imagedescription} key={i} src={pet.imageurl} width='40' height='50'/>
            )}
        
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default PetQueueDisplay
