import React from 'react';
import classes from './Productlisting.module.css'
import Product from '../../components/Product/Product'
import Sampledata from '../../sampledata/sampledata.json'
import MainNav from '../../components/MainNav/MainNav';
import Footer from '../../components/Footer/Footer'

const productlisting =(props)=>{
    
    let allproducts=props.products.map(function(item){ 
        return(
            <Product name={item.name} price={item.price} img={item.img}></Product>
        );
    });
    return(
        <React.Fragment>
    <div className={classes.productlisting}>
        <div className={classes.productscontainer}>
            <h1>Product Listing</h1>
            <p>Trusted by over 1,700,000 businesses worldwide</p>
            <div className={classes.container}>
            {allproducts}
            {console.log(Sampledata.products)}
            </div>
        </div>
    </div>
        </React.Fragment>
    );
    };

export default productlisting;