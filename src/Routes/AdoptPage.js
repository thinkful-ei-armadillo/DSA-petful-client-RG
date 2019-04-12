import React, { Component } from 'react'
import PetfulContext from '../Context/petfulContext';
import PetQueueDisplay from '../Components/PetQueueDisplay';

export class AdoptPage extends Component {
  static contextType = PetfulContext;
  componentDidMount(){
    
  }
  render() {
    const {DogQueueList, CatQueueList} = this.context;
    return (
      <section>
        <div className='cat-container'>
            <PetQueueDisplay petList={CatQueueList} type={'Cat'}/>
        </div>
        <div className='dog-container'>
            <PetQueueDisplay petList={DogQueueList} type={'Dog'}/>
        </div>
      </section>
    )
  }
}

export default AdoptPage
