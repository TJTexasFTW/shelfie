import React, { Component } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';


export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      p_name: "",
      price: ""
    };

    this.handlePrice = this.handlePrice.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handlePName = this.handlePName.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handlePrice (val) {
    this.setState({price: val});
    console.log(this.state.price);
  }

  handleURL (val) {
    this.setState({image: val});
    console.log(this.state.image);
  }

  handlePName (val) {
    this.setState({p_name: val});
    console.log(this.state.p_name);
  }
  
  clearEntries () {
    this.setState({p_name: ""});
    this.setState({image: ""});
    this.setState({price: ""});
    document.getElementById('URL').value ='';
    document.getElementById('p_name').value ='';
    document.getElementById('price').value ='';
  }

  addProduct(n, p, i) {

    axios.post("/api/product", {
      name: n, price: p, image_url: i
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.clearEntries();

  }


  // addProduct(n, p, i) {
  //   axios.post("/api/product", {name: n, price: p, image_url: i}).then( results => 
  //     this.getData())};

  // }
  
  render() {

    return (
      <div>Form
        <p>Image URL: <input id="URL" onChange={ (e) => this.handleURL(e.target.value) } /></p> 
        <p>Product Name: <input id="p_name" onChange={ (e) => this.handlePName(e.target.value) } /></p>
        <p>Price: <input id="price" onChange={ (e) => this.handlePrice(e.target.value) } /></p>
        <p><button id="Clear" onClick={() => this.clearEntries()}>Cancel</button>                
        <button onClick={() => this.addProduct(this.state.p_name, this.state.price, this.state.image)}>Add to Inventory</button></p>
      </div>
    )
  }
}