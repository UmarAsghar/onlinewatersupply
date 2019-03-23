import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <login>
     {/* this is Register heading content */}
  
  <nav class="navbar navbar-light bg-light" >
      <span class="navbar-brand mb-0 h1 mx-auto">Sign In Here</span>
  </nav>
  <hr/>
  {/* this is Account login heading */}
<div className="container">
  <nav class="navbar  navbar-dark bg-dark my-3">
  <span class="navbar-brand mb-0 h1 mx-auto">Account Login</span>
</nav>
</div>
{/* this is Login page */}
<div className="container">
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">E-Mail Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
    <br/>
    <Link to="/Forgetpassword">Forget Your Password</Link>
    <br/>
    <Link to="/Registration">Create New Account</Link>
    
  </div>
  {/* this is sign in button */}
  <div class="col text-center">
  <button type="submit" class="btn btn-outline-dark">Sign in</button>
  </div>
</form>
</div>

     </login>
    );
  }
}

export default Login;
