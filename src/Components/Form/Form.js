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
  
  render() {

    return (
      <div>Form
        <p>Image URL: <input id="URL" onChange={ (e) => this.handleURL(e.target.value) } /></p> 
        <p>Product Name: <input id="p_name" onChange={ (e) => this.handlePName(e.target.value) } /></p>
        <p>Price: <input id="price" onChange={ (e) => this.handlePrice(e.target.value) } /></p>
        <p><button id="Clear" onClick={() => this.clearEntries()}>Cancel</button>                <button onClick={() => this.props.addProduct(this.state.image, this.state.p_name, this.state.price)}>Add to Inventory</button></p>
        {/* <button className = "signupButton" onClick={() => this.props.addUser(this.state.name, this.state.alias, this.state.balance)}>Start Playing</button> */}
        {/* <input onChange={ (e) => this.handleAddAlias(e.target.value) }/> */}
      </div>
    )
  }
}