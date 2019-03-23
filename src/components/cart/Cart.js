import React, { Component } from 'react';


class Cart extends Component {
  render() {
    return ( 
      <div>
      <nav class="navbar navbar-light bg-light" >
      <span class="navbar-brand mb-0 h1 mx-auto">Add To Cart</span>
    </nav>
    <hr/>
    <div className="container">
      <nav class="navbar  navbar-dark bg-dark my-3">
      <span class="navbar-brand mb-0 h1 mx-auto">Items in  The list of Cart</span>
    </nav>
    </div>
    </div>
    );
}
}

export default Cart;
