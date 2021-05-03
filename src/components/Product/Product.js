import React from 'react';
import { connect } from 'react-redux';
import classes from './Product.module.css'
import * as actions from '../../Store/Actions/home';

const product =(props)=>{
   
    const addToCartHandler=(name,price,img)=>{
        // console.log(name,price,img);
        props.onAddToCart(name,price,img);

    }
   
   return( <div className={classes.productcontainer}>
        <div className={classes.flexcontainer}>
        <div className={classes.flex}>
            <div class="img-container">
        <img src={props.img}></img>
        </div>
        </div>
        <div className={classes.flex1}>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
        <button type="button" onClick={()=>{addToCartHandler(props.name,props.price,props.img)}}>add to cart</button>
        </div>
    </div>
);
}

// const mapStateToProps=state=>{
//     return{
//         products:state.products,
//     }
//   }
  
  const mapDispatchToProps = dispatch => {
    return {
        onAddToCart:(name,price,img)=>dispatch(actions.addToCart(name,price,img)),
    };
  };
  
  

export default  connect(null,mapDispatchToProps)(product);