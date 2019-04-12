import React, { Component } from 'react'
import PetfulContext from '../Context/petfulContext';
import PetQueueDisplay from '../Components/PetQueueDisplay';

export class AdoptPage extends Component {
  static contextType = PetfulContext;
  componentDidMount(){
    
  }
  render() {
    const {Dogs, Cats} = this.context;
    return (
      <section className='row'>
        <div className='cat-container col-6'>
            <PetQueueDisplay pets={Cats} type={'Cat'}/>
        </div>
        <div className='dog-container col-6'>
            <PetQueueDisplay pets={Dogs} type={'Dog'}/>
        </div>
      </section>
    )
  }
}

export default AdoptPage
