import React, { Component} from 'react';

const PetfulContext = React.createContext({
  DogQueueList: [],
  CatQueueList: []
})

export default PetfulContext;
// dogs ; firstinLine listAll = []
export class PetfulProvider extends Component {
    state={
        Dogs: {
            first: [{
                id: 1,
                imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
                imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                name: 'Fluffy1',
                sex: 'Female',
                age: 2,
                breed: 'Bengal',
                story: 'Thrown on the street'
                }],
            display: [{
                id:1,
                imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
                imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                name: 'Fluffy',
                sex: 'Female',
                age: 2,
                breed: 'Bengal',
                story: 'Thrown on the street'
                },{id:2,
                    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
                    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                    name: 'Fluffy2',
                    sex: 'Female',
                    age: 2,
                    breed: 'Bengal',
                    story: 'Thrown on the street'
                    }]
        },
        Cats: {
            first: [{ id: 1,
                imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
                imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                name: 'Fluffy5',
                sex: 'Female',
                age: 2,
                breed: 'Bengal',
                story: 'Thrown on the street'
                }],
            list: [{ id: 2,
                imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
                imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                name: 'Fluffy6',
                sex: 'Female',
                age: 2,
                breed: 'Bengal',
                story: 'Thrown on the street'
                },
                { id: 1,
                    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
                    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                    name: 'Fluffy7',
                    sex: 'Female',
                    age: 2,
                    breed: 'Bengal',
                    story: 'Thrown on the street'
                    }]
                }
    }
    setDogfirst = (data) =>{
       const firstDog = [data]
       this.setState({Dogs: 
                        { first: firstDog}});
    }
    setDogList = (data) =>{
        this.setState({dogs: {
            list: data
        }});
    }
    render(){
        const value = {
            Dogs: this.state.Dogs,
            Cats: this.state.Cats,
            setDogList: this.setDogList,
            setDogfirst: this.setDogfirst
        }
        
        return(
            <PetfulContext.Provider value={value}>
                {this.props.children}
            </PetfulContext.Provider>
        )
    }
}