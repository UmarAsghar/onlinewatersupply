import React, { Component } from 'react';


class Forgetpassword extends Component {
  render() {
    return (
      <div className="container">
      <nav class="navbar navbar-light bg-light my-2" >
      <span class="navbar-brand mb-0 h1 mx-auto">Forget Your Password? Thats Alright!</span>
  </nav>
  <hr/>

  <nav class="navbar  navbar-dark bg-dark my-3">
  <span class="navbar-brand mb-0 h1 mx-auto">Enter your email below and we will send you a password reset link.</span>
</nav>
<div class="form-group">
    <label for="exampleInputEmail1">E-Mail Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="col text-center">
  <button type="submit" class="btn btn-outline-dark">Send Password Reset Link</button>
  </div>
</div>



    );
  }
}

export default Forgetpassword;
