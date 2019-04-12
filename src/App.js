import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
import Product from "./Components/Product/Product"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: {}
    };
  }
  
  render() {
    return (
      <div className="App">
        <p><Dashboard></Dashboard></p>
        <p><Form></Form></p>
        <p><Header></Header></p>
        <p><Product></Product></p>
      </div>
    );
  }
}

export default App;
