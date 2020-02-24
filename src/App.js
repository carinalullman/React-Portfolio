
import React from 'react';
//import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, } from 'react-router-dom';
import Project from './components/project.component.js';
import Header from './components/header.component.js';
import Footer from './components/footer.component.js';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Project} />
        <Route path="/header" component={Header} />
        <Route path="/footer" component={Footer} />
        {/* <div className="navigation"> */}
        {/* <img src={logo} className="logo-image" alt="Logo Image" /> */}
        {/* <div className="navigation-sub"> */}

        {/* <Link to="/" className="item">Home</Link>
            <Link to="/header" className="item">Header</Link>
            <Link to="/footer" className="item">Footer</Link> */}

        {/* </div>
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;