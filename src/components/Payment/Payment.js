import React from 'react';
import classes from './Payment.module.css'
import Navbar from '../Navbar/Navbar'
import {
  Link,
  Route
} from 'react-router-dom';


const payment =(props)=>(
  <React.Fragment>
           <div className={classes.cartcontainer}>
             <div class="row">
               <div class="col-8 item">
                <h1>Payment Options</h1>
                <hr></hr>
  <div class="custom-control custom-radio mb-4" style={{backgroundColor: "#ffe6ea", padding:'40px'}}>
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"></input>
  <label class="custom-control-label" for="customRadio1">Credit Card 
  <p className={classes.paypara}>Please use a digital payment method and help us ensure contactless delivery for your safety</p></label>
  <div class="form-row">
  <div class="form-group col-md-6">
      <input type="email" class="form-control" id="inputEmail4" placeholder="0000 0000 0000 0000"></input>
          </div>
          <div class="form-group col-md-3">
      <input type="email" class="form-control" id="inputEmail4" placeholder="MM/YY"></input>
          </div>
          <div class="form-group col-md-3">
      <input type="email" class="form-control" id="inputEmail4" placeholder="CVV"></input>
          </div>
  <div class="form-group col-md-12">
      <input type="email" class="form-control" id="inputEmail4" placeholder="Card Holder Name"></input>
          </div>
</div>
</div>
<div class="custom-control custom-radio mb-4"  style={{backgroundColor: "#ffe6ea", padding:'40px'}}>
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input "></input>
  <label class="custom-control-label col-md-8" for="customRadio2"><h6>PayPal</h6>
  <span className={classes.paypara}>Please use a digital payment method and help us ensure contactless delivery for your safety</span>
  </label>
  <span class="logoimg col-md-2 "><img className={classes.paypallogo} src="./paypal-logo.png"></img>
  </span>
  

</div>



 <button className={classes.cartbutton}type="button">Pay Now</button>
                <button className={classes.cartbutton}type="button">Back</button>
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
           </React.Fragment>
);

export default payment;