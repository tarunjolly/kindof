import React from 'react';
import classes from './Product.module.css'


const product =(props)=>(
    <div className={classes.productcontainer}>
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
        </div>
    </div>
);

export default product;