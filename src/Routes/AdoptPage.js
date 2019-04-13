import React, { Component } from 'react'
import PetfulContext from '../Context/petfulContext';
import PetQueueDisplay from '../Components/PetQueueDisplay';
import PetfulServices from '../Services/PetfulServices';

export class AdoptPage extends Component {
  static contextType = PetfulContext;

  componentDidMount(){
  PetfulServices.getDogs().then(res => {
    const first = res.first;
    const list = res.display;
    this.context.setDogs(first, list);
    })
  PetfulServices.getCats().then(res => {
    const first = res.first;
    const list = res.display;
    this.context.setCats(first, list);
    })
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
