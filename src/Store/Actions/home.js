import * as actionTypes from './actionTypes';

export const addToCart = (name, price,img) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product:{name:name ,
        price: price,
        img:img}
    }
}

