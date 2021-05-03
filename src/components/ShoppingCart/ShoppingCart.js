import React from 'react';
import classes from './ShoppingCart.module.css'
import Navbar from '../Navbar/Navbar'
import {
  Link,
  Route
} from 'react-router-dom';


const cart =(props)=>(
  <React.Fragment>
           <div className={classes.cartcontainer}>
             <div class="row">
               <div class="col-8 item">
                <h1>Shopping Cart</h1>
                <button className={classes.cartbutton}type="button">Next</button>
                <button className={classes.cartbutton}type="button">Cancel</button>
               </div>
               <div class="col-4 item1">
                <h1>Summary</h1>
                <hr></hr>
                <p>ENTER COUPON CODE</p>
                <hr></hr>
                <p>SUBTOTAL</p>
                <p>SHIPPING</p>
                <p>TAXES</p>
                <hr></hr>
                <p>TOTAL</p>
               </div>
             </div>
           </div>
           {console.log(props)}
           </React.Fragment>
);

export default cart;