import React, { useEffect } from 'react';
import MainNav from '../../components/MainNav/MainNav';
import About from '../../components/About/About'
import Productlisting from '../Productlisting/Productlisting'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/ShoppingCart/ShoppingCart'
import Shipping from '../../components/Shipping/Shipping'
import Payment from '../../components/Payment/Payment'
import Help from '../../components/Help/Help';
import Search from '../../components/Search/Search';
import {connect} from 'react-redux';

const Home =(props)=>{
  useEffect(()=>{

    },[])
return(   <React.Fragment>
    <MainNav></MainNav>
    <Search></Search>
    <Productlisting products={props.products}></Productlisting>
    <Footer></Footer>
  </React.Fragment>
  );

}


const mapStateToProps=state=>{
  return{
      products:state.products,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);


