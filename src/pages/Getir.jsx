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
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [prod, setProd] = useState()

  const x = 'Su & İçecekler'

  useEffect(() => {
    if (basket.length !== 0) {
      for (var i = 0; i < basket.length; i++) {
        const t = basket[i].price
        setTotal(total + t)
      }
    } else {
    }
  }, [basket])

  const prodArray = []
  const prodArray2 = []
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < category[i].products.length; j++) {
      prodArray.push(category[i].products[j])
      
      if(category[i].id===1){
        prodArray2.push(category[i].products[j])
      }
    }
  }

  useEffect(()=> {
    console.log(prod)
  },[prod])

  const filterProducts = () => (  
    setProd(prodArray2)  
   )

  useEffect(() => {
    setProd(prodArray.filter(prod => prod.title.toLowerCase().includes(search)))
  },[search])

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="container">
        <div className="categories" onClick={filterProducts}>
          <h3>Kategoriler</h3>
          {category.map((c) =>
            <Category key={c.id} category={c} />
          )}
        </div>
        <div className="products">
          {search ? (
            prod.map((pro) => (
              <Product key={pro.id} product={pro} basket={basket} setBasket={setBasket} />
            ))
          ) : (category.map((cat) => (
            <>
              {cat.products.map((p) => (
                <Product key={p.id} product={p} basket={basket} setBasket={setBasket} />
              ))}
            </>
          )))}


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
