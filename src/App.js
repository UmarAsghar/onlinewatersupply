import React, { Component } from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Imageslider from './components/imageslider/Imageslider';
import Shop from './components/shop/Shop';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Forgetpassword from './components/forgetpassword/Forgetpassword';
import About_Us from './components/about/About_Us';
import Contact_Us from './components/contact/Contact_Us';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import {BrowserRouter , Switch, Route } from 'react-router-dom';


class App extends Component {

  state = {

  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header/>
      
     
     <Switch>
       
     <Route path="/Home" component={Home}/>
     <Route path="/Shop" component={Shop}/>
     <Route path="/Registration" component={Registration}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Contact_Us" component={Contact_Us}/>
     <Route path="/About_Us" component={About_Us}/>
     <Route path="/Forgetpassword" component={Forgetpassword}/>
     <Route path="/Cart" component={Cart}/>
     <Route path="/" component={Imageslider}/>

     </Switch>
     
     <Footer/>
     
     </div>

     </BrowserRouter>
    );
  }
}

export default App;
