import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Registration extends Component {
  render() {
    return (
      <div>

        {/* this is Register heading content */}
  <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1 mx-auto">Register Your Self Here</span>
  </nav>

      <hr/>
       {/* this is sin up heading */}
      <div className="container">
  <nav class="navbar  navbar-dark bg-dark my-3">
  <span class="navbar-brand mb-0 h1 mx-auto">SIGN UP.</span>
</nav>
</div>

       {/* this is Login first last name form contents */}
       <div className="container">
<form>
      <div class="form-row">
      <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
     </div>
     <div class="col">
     <input type="text" class="form-control" placeholder="Last name"/>
     </div>
     </div>
</form>

     {/* this is Email field */}
<form>
  <div class="form-row">
       <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
   </div>

    {/* this is password field */}
  <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
  </div>

</div>

  {/* this  is Mobile No */}
<div class="form-row">

  <div class="col">
  <label for="inputMobile">Mobile No:</label>
      <input type="text" class="form-control" placeholder="Mobile No"/>
   </div>

</div>

  {/* this is address 1 field */}
  <div class="form-group">
    <label for="inputAddress">Parmanent Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main Street House No"/>
  </div>


  {/* this is address 2 */}
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>


  {/* this is city field */}
<div class="form-row">

    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>

    {/* this is state field */}
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Punjab</option>
        <option>....</option>
      </select>
    </div>

    {/* this is zip code field */}
    <div class="form-group col-md-2">
      <label for="inputZip">Zip Code Of City</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>

</div>

  {/* this is verification box */}
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
      
    </div>
  </div>
  <Link to="/Login">Already have an Account</Link>
  {/* this is sign in button */}
  <div class="col text-center">
  <button type="submit" class="btn btn-outline-dark">Sign in</button>
  </div>
</form>
      
    </div>
    </div>
    );
  }
}

export default Registration;
