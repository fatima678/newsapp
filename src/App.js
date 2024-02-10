
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Router>
        <Navbar/>
        <Switch> 
          {/* <Route><News pageSize={6} country="in" category="science"/></Route> */}
          <Route path='/'><News pageSize={6} country="in" category="general"/></Route>
          <Route path='/business'><News pageSize={6} country="in" category="business"/></Route>
          <Route path='/entertainment'><News pageSize={6} country="in" category="entertainment"/></Route>
          <Route path='/general'><News pageSize={6} country="in" category="general"/></Route>
          <Route path='/health'><News pageSize={6} country="in" category="health"/></Route>
          <Route path='/science'><News pageSize={6} country="in" category="science"/></Route>
          <Route path='/sports'><News pageSize={6} country="in" category="sports"/></Route>
          <Route path='/technology'><News pageSize={6} country="in" category="technology"/></Route>

        
        </Switch>
         
          
        
        </Router>
        
      </div>
      </>
    )
    
  }
}
