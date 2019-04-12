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
            first: [],
            display: []
        },
        Cats: {
            first: [],
            list: []
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