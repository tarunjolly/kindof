import React from 'react';
import classes from './Navbar.module.css'
import {
  Link,
  Route
} from 'react-router-dom';

const navbar =(props)=>(
  <React.Fragment>
          <nav>
            <ul className={classes.cartlinks}>
            <li><Link className={classes.underline} to='/yourcart/'>1. Shopping Cart</Link></li>
            <li><Link className={classes.underline} to='/yourcart/shipping'>2. Shipping Details</Link></li>
            <li><Link className={classes.underline} to='/yourcart/payment'>3. Payment Options</Link></li>
            </ul>
          </nav>
           </React.Fragment>
);

export default navbar;