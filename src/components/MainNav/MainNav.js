import React from 'react';
import classes from './MainNav.module.css'
import App from '../../App'
import {
  Link,
  Route
} from 'react-router-dom';
import Productlisting from '../../Containers/Productlisting/Productlisting';

const nav =(props)=>(
    <div className={classes.nav}>
    <div>
      <div className="row">
        <div className="col-6 p-3 ">BookStore</div>
        <div className="col-6">
          <nav >
            <ul className={classes.ul}>
            <li><Link className={classes.mainnav} to='/'>Home</Link></li>
            <li><Link className={classes.mainnav} to='/about'>About</Link></li>
            <li><Link className={classes.mainnav} to='/shop'>Shop</Link></li>
            <li><Link className={classes.mainnav}to='/help'>Help</Link></li>
              <Link className={classes.navbutton} to='/yourcart'><i class="fas fa-cart-plus"></i>Your cart</Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
    
);

export default nav;