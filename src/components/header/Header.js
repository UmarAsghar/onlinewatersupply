import React, { Component } from 'react';
import logo from './logo.gif';
import cart from './cart.ico';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      
      <header>
        {/* this is all navigation links */}
<nav class="navbar  navbar-dark bg-dark">
        
  <a class="navbar-brand" href="/">
    <img src={logo} width="45" height="56" class="d-inline-block align-top" alt=""/>
<span class="navbar-brand mb-0 h1 mx-2 mt-2 ">Pure Water Supply</span>
  </a>
  <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link class="nav-link active" to="/Home">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/Shop">Shop</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/Registration">Registration</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/Contact_Us">Contact Us</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/About_Us">About Us</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Login">Login</Link>
  </li>
  <li class="nav-item">
  <Link class="navbar-brand" to="/Cart">
  <img src={cart} width="40" height="40" alt=""/>
    </Link>
    
  </li>
</ul>
</nav>
      </header>
     
    );
  }
}

export default Header;
