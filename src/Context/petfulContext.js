import React, { Component} from 'react';

const PetfulContext = React.createContext({
  Dogs: [],
  Cats: [],
  isLoading: null,
  setDogs: () => {},
  setCats: () => {},
  adoptedCat: ()=>{},
  adoptedDog: () => {}
})

export default PetfulContext;

export class PetfulProvider extends Component {
    state={
        isLoading: null,
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
        this.setState({
            Cats: { 
              first: first,
              list: list}
        });
    }
    setDogs = (first, list) =>{
       this.setState({
           Dogs: { 
            first: first,
            list: list}
        });
    }
    adoptedCat = (id) =>{
      const list = this.state.Cats.list.filter(el => el.id !== id);
      const first = list[0];
      this.setState({
        Cats: {
            first: first,
            list: list
        }
      });
    }
    adoptedDog = (id) =>{
        const list = this.state.Dogs.list.filter(el => el.id !== id);
        const first = list[0];
        this.setState({
          Dogs: {
              first: first,
              list: list
          }
        });
      }
    render(){
        const value = {
            Dogs: this.state.Dogs,
            Cats: this.state.Cats,
            isLoading: this.state.isLoading,
            setCats: this.setCats,
            setDogs: this.setDogs,
            adoptedCat: this.adoptedCat,
            adoptedDog: this.adoptedDog
        }
        return(
            <PetfulContext.Provider value={value}>
                {this.props.children}
            </PetfulContext.Provider>
        )
    }
}