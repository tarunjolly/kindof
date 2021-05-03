// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Home from './Containers/Home/Home'
import {Route } from 'react-router-dom'
import Search from './components/About/About';
import Productlisting from './Containers/Productlisting/Productlisting';
import Help from './components/Help/Help';
import Yourcart from './Containers/Yourcart/Yourcart';
import Nav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <React.Fragment>
    <Route exact path="/about" component={Search}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/help" component={Help}></Route>
        <Route exact path="/yourcart" component={Yourcart}></Route>
        <Route exact path="/" component={Home}></Route>
        </React.Fragment>
  );
}

export default App;
