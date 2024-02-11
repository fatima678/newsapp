
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// // import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

// export default class App extends Component {
//   render() {
//     return (
//       <>
//       <div>
//         <Router>
//         <Navbar/>
//         <Switch> 
//           {/* <Route><News pageSize={6} country="in" category="science"/></Route> */}
//           <Route path='/'><News pageSize={6} country="in" category="general"/></Route>
//           <Route path='/business'><News pageSize={6} country="in" category="business"/></Route>
//           <Route path='/entertainment'><News pageSize={6} country="in" category="entertainment"/></Route>
//           <Route path='/general'><News pageSize={6} country="in" category="general"/></Route>
//           <Route path='/health'><News pageSize={6} country="in" category="health"/></Route>
//           <Route path='/science'><News pageSize={6} country="in" category="science"/></Route>
//           <Route path='/sports'><News pageSize={6} country="in" category="sports"/></Route>
//           <Route path='/technology'><News pageSize={6} country="in" category="technology"/></Route>

        
//         </Switch>
         
          
        
//         </Router>
        
//       </div>
//       </>
//     )
    
//   }
// }
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // variable for chnaging pagesize
  pageSize=10;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact  path='/business' element={<News key='business' pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path='/general' element={<News key='' pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path='/health' element={<News  key='health'pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country="in" category="sports" />} />
           
          </Routes>
        </Router>
      </div>
    );
  }
}

