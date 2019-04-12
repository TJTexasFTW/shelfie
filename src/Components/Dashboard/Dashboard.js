import React, { Component } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import Product from '../Product/Product'


export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      something: ""
    };
  }

  render() {

    // const userList = this.props.users.map(val => <li key={val.id}><p>ID: {val.id}</p><p>NAME: {val.name}</p><p>ALIAS: {val.alias}</p><p>BALANCE: {val.balance}</p></li>);
    // const inventory = this.props.inventory.map(val => <li key={val.id}>
    //   <p>Product: {val.name}</p>
    //   <p>Price: {val.price}</p>
    //   <p><img src={val.image} alt="product" /></p>
    //   </li>);

      const inventoryMap = this.props.inventory.map(val => <li key={val.id}>
        <p>Product: {val.name}</p>
        <p>Price: {val.price}</p>
        <p><img src={val.image} alt="product" /></p>
        </li>);


    // const inventoryMap = this.props.inventory.map(val => <p><Product /></p>);


    return (
      <div>Dashboard
      <Product 
        inventory={this.inventoryMap} />
      {inventoryMap}
      </div>
    )
  }
}