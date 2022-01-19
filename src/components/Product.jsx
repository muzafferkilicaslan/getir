import React from 'react';
import { useState } from 'react';
import {moneyFormat} from '../helpers.js';


const Products = ({product}) => {
    
    const addBasket=()=>{
        console.log(product)
    }
    
    return (

        <div className='product'>
            
            <img src={product.image} onClick={addBasket} />
            <span className='price'>{moneyFormat(product.price)}</span>
            <p>{product.title}</p>            
            <span className='description'>{product.description}</span>
            
        </div>
    );
};

export default Products;