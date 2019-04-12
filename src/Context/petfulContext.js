import React, { Component} from 'react';

const PetfulContext = React.createContext({
  DogQueueList: [],
  CatQueueList: []
})

export default PetfulContext;

export class PetfulProvider extends Component {
    state={
        DogQueueList: [],
        CatQueueList: []
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