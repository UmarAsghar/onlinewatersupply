import React, { Component } from 'react';
import botal from './botal.jpg';

class Shop extends Component {
  constructor(props){
    super(props);
    this.state={
      counter1:0,
      counter2:0,
      counter3:0,
      counter4:0
      
    };
  };
  firstincrement(){
    this.setState({
      counter1:this.state.counter1 +1
    })
  };
  firstdecrement(){
    this.setState({
      counter1:this.state.counter1 -1
    })
  };
  
  secondincrement(){
    this.setState({
      counter2:this.state.counter2 +1
    })
  };
  seconddecrement(){
    this.setState({
      counter2:this.state.counter2 -1
    })
  };

  thirdincrement(){
    this.setState({
      counter3:this.state.counter3 +1
    })
  };
  thirddecrement(){
    this.setState({
      counter3:this.state.counter3 -1
    })
  };

  fourincrement(){
    this.setState({
      counter4:this.state.counter4 +1
    })
  };
  fourdecrement(){
    this.setState({
      counter4:this.state.counter4 -1
    })
  };
  

  render() {
    return (
      <div>

      <nav class="navbar navbar-light bg-light" >
      <span class="navbar-brand mb-0 h1 mx-auto">Shop Here</span></nav>
  
    <hr/>

          <div className="container">
      <nav class="navbar  navbar-dark bg-dark my-3">
      <span class="navbar-brand mb-0 h1 mx-auto">Select The Quantity Of Water On Your Own Needs</span>
    </nav>

    <div class="row">
      <div class="card-group">
                 
      {/* card 1 */}
                  <div class="card" style={{width: "18rem"}}>
                      <img src={botal} class="card-img-top" alt="..."/>

                               <div class="card-body">
                               <h5 class="card-title">Water Bottle </h5>
                               <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">500 ml<br/>Price = Rs.40</li>                    
                     <li class="list-group-item">Select Quantity
                     <div class="mt-3"><button onClick={()=>this.firstincrement()}>+</button> {this.state.counter1 }<span>L</span> <button  onClick={()=>this.firstdecrement()}>-</button></div>    </li>
                    
                     </ul>
                              <div class="card-body">
                              <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                </div>
       {/* card 1 end */}

                {/* card 2 */}

        <div class="card" style={{width: "18rem"}}>
                 <img src={botal} class="card-img-top" alt="..."/>

                              <div class="card-body">
                              <h5 class="card-title">Water Bottle </h5>
                               <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">1L<br/>Price = Rs.60</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this. secondincrement()}>+</button>  {this.state.counter2 }<span>L</span>  <button  onClick={()=>this.seconddecrement()}>-</button></div></li>
                       
                       </ul>

                                <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
         </div>
              {/* card 2 end */}

         {/* card 3 */}

        <div class="card" style={{width: "18rem"}}>
                      <img src={botal} class="card-img-top" alt="..."/>
                             <div class="card-body">
                              <h5 class="card-title">Water Bottle </h5>
                              <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">1.5L<br/>Price = Rs.90</li>
                      <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.thirdincrement()}>+</button>  {this.state.counter3 }<span>L</span>  <button  onClick={()=>this.thirdincrement()}>-</button></div></li>
                      
                      </ul>

                                 <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
          </div>
          {/* card 3 end */}

                 {/* card 4 */}

                <div class="card" style={{width: "18rem"}}>
                     <img src={botal} class="card-img-top" alt="..."/>
                              <div class="card-body">
                               <h5 class="card-title">Filteration Water </h5>
                                <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">5L Can<br/>Price = Rs.250</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.fourincrement()}>+</button>  {this.state.counter4 }<span>C</span> <button  onClick={()=>this.fourdecrement()}>-</button>  </div>    </li>
                       
                       </ul>
                                      <div class="card-body">
                                      <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                               </div>
          
                  </div>
                  {/* card 4 end */}
       </div>
     </div>
  </div>
    );
  }
}

export default Shop;
