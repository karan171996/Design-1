import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="container" >
       <Cards/>
      </div>
    );
  }
}

export default App;
