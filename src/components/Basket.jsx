import React from 'react';

const Basket = ({basket,total,setTotal}) => {

    const total2=basket.amount*basket.price

    

    return (
        <div className='basket-item'>
        <div className='title'><p>{basket.title}</p></div>    
        <div className='desc'><span>{basket.amount}X{basket.price}</span></div>         
        <div className='total'><p>{total2}</p></div>      
        </div>
    );
};

export default Basket;