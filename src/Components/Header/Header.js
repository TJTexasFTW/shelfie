import React, { Component } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      something: ""
    };
  }

  render() {


    return (
      <div>Header</div>
    )
  }
}