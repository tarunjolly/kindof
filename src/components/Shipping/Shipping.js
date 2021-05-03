import React from 'react';
import classes from './Shipping.module.css'
import Navbar from'../Navbar/Navbar';
import {
  Link,
  Route
} from 'react-router-dom';


const shipping =(props)=>(
  <React.Fragment>
           <div className={classes.cartcontainer}>
             <div class="row">
               <div class="col-8">
                <h2>Shipping Details</h2>
                <hr></hr>
                <form className={classes.shippingform}>
                <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputEmail4" placeholder="First Name"></input>
          </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name"></input>
      </div>
  </div>
  <div class="form-group ">
    <input type="text" class="form-control" id="inputAddress" placeholder="Address"></input>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputAddress2" placeholder="Address 2"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>Country</option>
        <option>USA</option>
      </select>
      </div>
      <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputCity" placeholder="City"></input>
      </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="inputEmail4" placeholder="Zip/Postal Code"></input>
          </div>
    <div class="form-group col-md-6">
      <input type="password" class="form-control" id="inputPassword4" placeholder="Phone Number"></input>
      </div>
  </div>
  <div class="form-row">
  <div class="form-check form-check-inline col-md-5 mx-4 p-2" style={{backgroundColor: "#ffe6ea"}}>
  <input class="form-check-input px-2 py-5" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
  <label class="form-check-label" for="inlineRadio2">Free Shipping <span>between 2-5 working days </span></label>
</div>
<div class="form-check form-check-inline col-md-5 mx-4 p-2" style={{backgroundColor: "#ffe6ea"}} >
  <input class="form-check-input px-2 py-5" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
  <label class="form-check-label" for="inlineRadio2">Next Day Delivery - $20 <span>24 hours from checkout </span></label>
  </div>
</div>

                </form>
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
           </React.Fragment>
);

export default shipping;