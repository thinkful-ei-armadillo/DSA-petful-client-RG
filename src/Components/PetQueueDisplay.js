import React, { Component } from 'react'

export class PetQueueDisplay extends Component {
  render() {
    const petList = this.props.petList;
    const type = this.props.type;
   console.log(type, petList);
    return (
      <div className='pet-container col-6'>
        <div className='next-prev-container'>
          <input type='button' name='prev-btn'value='Previous'/>
          <input type='button' name='next-btn'value='Next'/>
        </div>
        <div className="pet-info">
        <img src={petList[0].imageURL} width='50' height='50' alt={petList[0].imageDescription}></img>
        <p>Age: {petList[0].age}</p>
        <p>Breed:{petList[0].breed} </p>
        <p>Name:{petList[0].name}  </p>
        <p>Sex:{petList[0].sex}  </p>
        <p>Story:{petList[0].story}  </p>

        </div>
        
      </div>
    )
  }
}

export default PetQueueDisplay
