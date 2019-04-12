import React, { Component } from 'react';
import axios from 'axios';
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


    return (
      <div>Dashboard
      <Product></Product>
      </div>
    )
  }
}