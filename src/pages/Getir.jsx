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
  const [serverProduct,setServerProduct] = useState([]) 
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [cat,setCat]=useState()
  
  

  useEffect(()=>{
    const fetchCategories = async() => {
      const res = await fetch('http://localhost:5000/products1')
      const data = await res.json()

      data.map((d)=>(
        <>
          {d.products.map((p)=>{
            pArray.push(p)
          })}
        </>
      ))
      setServerProduct(pArray)
    }
    fetchCategories()
  },[])

  useEffect(()=>{
    console.log(serverProduct)
  },[serverProduct])

  useEffect(()=>{
    if(pArray==''){
      console.log("empty")
    }
  },[cat])

  return(
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="container">
        <div className="categories">
          <h3>Kategoriler</h3>
          {category.map((c) =>
            <Category key={c.id} category={c} pArray={pArray} setServerProduct={setServerProduct} setCat={setCat} />
          )}
        </div>
        <div className="products">
          {
            serverProduct.map((pro) => (
              <Product key={pro.id} product={pro} basket={basket} setBasket={setBasket} />
          ))
          }

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