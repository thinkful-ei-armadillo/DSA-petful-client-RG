import React, { Component } from 'react'
import PetfulContext from '../Context/petfulContext';
import PetQueueDisplay from '../Components/PetQueueDisplay';
import PetfulServices from '../Services/PetfulServices';

export class AdoptPage extends Component {
  static contextType = PetfulContext;
  componentDidMount(){
  PetfulServices.getDogs().then(res => console.log('dogs', res));
  PetfulServices.getCats().then(res => console.log('cats', res));
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
