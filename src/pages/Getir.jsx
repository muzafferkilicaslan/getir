import React from 'react';
import { useState, useEffect } from 'react';
import { moneyFormat } from '../helpers';
import Product from "../components/Product";
import Search from "../components/Search";
import Category from "../components/Category";
import Basket from '../components/Basket';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import category from '../category.json';

function Getir() {

  const pArray=[]
  const pArray2=[]

  category.map((cat)=>(
    <>
      {cat.products.map((p)=>{
        pArray.push(p)
      })}
    </>
  ))

  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [prod, setProd] = useState(pArray)
  const [cat,setCat]=useState()

  useEffect(() => {
    if (basket.length !== 0) {
      for (var i = 0; i < basket.length; i++) {
        const t = basket[i].price
        setTotal(total + t)
      }
    } else {
    }
  }, [basket])

  useEffect(()=>{
    console.log(cat)
  },[cat])
  
  useEffect(()=> {
    console.log(prod)  
  },[prod])

  useEffect(() => {
      if(cat){
        setProd(pArray.filter(prod => prod.category===cat && prod.title.toLowerCase().includes(search)))  
      }
      else{
        setProd(pArray.filter(prod => prod.title.toLowerCase().includes(search)))
      }
        
  },[search])

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="container">
        <div className="categories">
          <h3>Kategoriler</h3>
          {category.map((c) =>
            <Category key={c.id} category={c} setProd={setProd} pArray={pArray} setCat={setCat} />
          )}
        </div>
        <div className="products">
          {
            prod.map((pro) => (
              <Product key={pro.id} product={pro} basket={basket} setBasket={setBasket} />
          ))}
 

        </div>
        <div className="basket">
          <ShoppingBasketIcon />
          <p>Sepetim</p>
          {
            basket.map((b) => (
              <Basket key={b.id} basket={b} total={total} setTotal={setTotal} />
            ))
          }
          <div className="total-price">
            <p>Toplam : {moneyFormat(total)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getir;