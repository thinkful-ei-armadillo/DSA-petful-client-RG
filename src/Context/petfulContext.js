import React, { Component} from 'react';

const PetfulContext = React.createContext({
  DogQueueList: [],
  CatQueueList: [],
  setDogs: () => {},
  setCats: () => {},
})

export default PetfulContext;
// dogs ; firstinLine listAll = []
export class PetfulProvider extends Component {
    state={
        Dogs: {
            first: [],
            list: []
        },
        Cats: {
            first: [],
            list: []
        }
    }
    setCats= (first, list) => {
        this.setState({Cats: 
                         { first: [first],
                           list: list}});
    }
    setDogs = (first, list) =>{
       this.setState({Dogs: 
                        { first: [first],
                          list: list}});
    }

    render(){
        const value = {
            Dogs: this.state.Dogs,
            Cats: this.state.Cats,
            setCats: this.setCats,
            setDogs: this.setDogs
        }
     
        return(
            <PetfulContext.Provider value={value}>
                {this.props.children}
            </PetfulContext.Provider>
        )
    }
}