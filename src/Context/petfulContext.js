import React, { Component} from 'react';

const PetfulContext = React.createContext({
  DogQueueList: [],
  CatQueueList: []
})

export default PetfulContext;

export class PetfulProvider extends Component {
    state={
        DogQueueList: [{
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
            }],
        CatQueueList: [{
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
            }]
    }
    render(){
        const value = {
            DogQueueList: this.state.DogQueueList,
            CatQueueList: this.state.CatQueueList,
        }
        return(
            <PetfulContext.Provider value={value}>
                {this.props.children}
            </PetfulContext.Provider>
        )
    }
}