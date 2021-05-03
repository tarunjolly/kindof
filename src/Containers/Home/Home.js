import React from 'react';
import MainNav from '../../components/MainNav/MainNav';
import About from '../../components/About/About'
import Productlisting from '../Productlisting/Productlisting'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/ShoppingCart/ShoppingCart'
import Shipping from '../../components/Shipping/Shipping'
import Payment from '../../components/Payment/Payment'
import Help from '../../components/Help/Help';
import Search from '../../components/Search/Search';



const home =(props)=>(
    <React.Fragment>
    <MainNav></MainNav>
    <Search></Search>
    <Productlisting></Productlisting>
    <Footer></Footer>
  </React.Fragment>
);

export default home;


