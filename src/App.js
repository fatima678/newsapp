// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import React, { useState } from 'react'
// import LoadingBar from 'react-top-loading-bar';
// import progress from 'react-top-loading-bar'

// export default class App extends Component {
//   // variable for chnaging pagesize
//   pageSize=10;
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//         color='#f11946'
//         progress={progress}
//         // onLoaderFinished={() => setProgress(0)}
//       />
//           <Routes>
//             <Route exact path='/' element={<News key='general' pageSize={this.pageSize} country="in" category="General" />} />
//             <Route exact  path='/business' element={<News key='business' pageSize={this.pageSize} country="in" category="Business" />} />
//             <Route exact path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country="in" category="Entertainment" />} />
//             <Route exact path='/general' element={<News key='' pageSize={this.pageSize} country="in" category="General" />} />
//             <Route exact path='/health' element={<News  key='health'pageSize={this.pageSize} country="in" category="Health" />} />
//             <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country="in" category="Science" />} />
//             <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country="in" category="Sports" />} />
           
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import progress from 'react-top-loading-bar'
export default class App extends Component {
  // variable for changing pagesize
  pageSize = 10;
  state={
    progress:0
  }
  
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#bf1408'
            height={3}
            progress={100} 
          />
          <Routes>
            <Route exact path='/' element={<News  setProgress={this.setProgress} key='general' pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path='/business' element={<News  setProgress={this.setProgress} key='business' pageSize={this.pageSize} country="in" category="Business" />} />
            <Route exact path='/entertainment' element={<News  setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country="in" category="Entertainment" />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress}  key='' pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country="in" category="Health" />} />
            <Route exact path='/science' element={<News  setProgress={this.setProgress} key='science' pageSize={this.pageSize} country="in" category="Science" />} />
            <Route exact path='/sports' element={<News  key='sports' pageSize={this.pageSize} country="in" category="Sports" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}


