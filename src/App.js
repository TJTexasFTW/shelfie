import React, { Component } from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
import Product from "./Components/Product/Product"
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      product: []
    //   inventory: [{id: 1, name: "apple", price: 1, image: "https://www.gstatic.com/webp/gallery3/1.sm.png"},
    // {id: 2, name: "cat", price: 2, image: "https://homepages.cae.wisc.edu/~ece533/images/cat.png"}, {id: 3, name: "ball", price: 4, image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png"}]
    };

    this.getData = this.getData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    

  }

  getData() {
    axios.get('/api/inventory').
      then (res => {this.setState({inventory: res.data})});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">

       <p><Dashboard 
            inventory={this.state.inventory}
            getData={this.getData}/></p>
        <p><Form
            getData={this.getData}/></p>
        <p><Header/></p>
        <p><Product/></p>
      </div>
    );
  }
}

export default App;
