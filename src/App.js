import React, { Component } from 'react';
import { PetfulProvider } from './Context/petfulContext';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Routes/LandingPage';
import AdoptPage from './Routes/AdoptPage';
import './App.css';

class App extends Component {
  render() {
    return (
    <PetfulProvider>
     <header>
      
     </header>
     <main role='main'>
       <Switch>
         <Route exact path={'/'} component={LandingPage}/>
         <Route path={'/adopt'} component={AdoptPage}/>
       </Switch>
     </main>
    </PetfulProvider>
    );
  }
}

export default App;
