import React from 'react';
import { useState } from 'react';
import {moneyFormat} from '../helpers.js';


const Products = ({product, prod, basket, setBasket}) => {
    
    const addBasket=()=>{
        const checkBasket=basket.find(item=>item.id===product.id)
        if (checkBasket){
            checkBasket.amount+=1
            setBasket([...basket.filter(item=>item.id!==product.id),checkBasket])
        }else{
            setBasket([...basket,{
                id:product.id,
                amount:1,
                title:product.title,
                price:product.price                
            }])
        }
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