import React, { Component } from 'react';



class Contact_Us extends Component {
  render() {
    return (
      <form>
     <nav class="navbar navbar-light bg-light" >
      <span class="navbar-brand mb-0 h1 mx-auto">Contact Us Here</span>
  </nav>
  <hr/>
  {/* this is Account login heading */}
<div className="container">
  <nav class="navbar  navbar-dark bg-dark my-3">
  <span class="navbar-brand mb-0 h1 mx-auto">Please Give The Review</span>
</nav>
</div>

<div className="container">

<div class="form-row">
<div class="form-group col-md-6">
  <label for="inputMobile">Name:</label>
      <input type="text" class="form-control" placeholder="Name"/>
   </div>
   </div>

<div class="form-row">
       <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
   </div>
   </div>

   <div class="form-row">
<div class="form-group col-md-6">
  <label for="inputMobile">Subject:</label>
      <input type="text" class="form-control" placeholder="Subject"/>
   </div>
   </div>

   <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="col text-center">
  <button type="submit" class="btn btn-outline-dark">Sign in</button>
  </div>

   </div>
   </form>

   
    );
  }
}

export default Contact_Us;
