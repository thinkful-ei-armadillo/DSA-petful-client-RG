import React, { Component } from 'react'
import PetfulContext from '../Context/petfulContext';
import PetQueueDisplay from '../Components/PetQueueDisplay';
import PetfulServices from '../Services/PetfulServices';

export class AdoptPage extends Component {
  static contextType = PetfulContext;
  componentDidMount(){
  PetfulServices.getDogs().then(res => {
    this.context.setDogList(res.display);
    this.context.setDogfirst(res.first);})
  PetfulServices.getCats().then(res => console.log('cats', res));
  console.log('dogcontext', this.context.dog)
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
