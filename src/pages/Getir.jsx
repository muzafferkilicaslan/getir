import React from 'react';
import { useState, useEffect } from 'react';
import { moneyFormat } from '../helpers';
import Product from "../components/Product";
import Search from "../components/Search";
import Category from "../components/Category";
import Basket from '../components/Basket';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import category from '../category.json';
import CloseIcon from '@mui/icons-material/Close';

function Getir() {

  const [serverProduct, setServerProduct] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState()
  const [prod, setProd] = useState([])

  useEffect(() => {
    if (basket.length !== 0) {
      for (var i = 0; i < basket.length; i++) {
        const t = basket[i].price
        setTotal(total + t)
      }
    } else {
    }
  }, [basket])


  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('http://localhost:5000/products1')
      const data = await res.json()
      let pArray = []

      data.map((d) => (

        d.products.map((p) => {
          pArray.push(p)
        })

      ))
      setServerProduct(pArray)
      setProd(pArray)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (cat) {
      if (search !== '') {
        const pArray4 = prod.filter(p => p.category === cat && p.title.toLowerCase().includes(search))
        setServerProduct(pArray4)
      }
      else {
        const pArray4 = prod.filter(p => p.category === cat)
        setServerProduct(pArray4)
      }
    } else {
      if (search !== '') {
        const pArray4 = prod.filter(p => p.title.toLowerCase().includes(search))
        setServerProduct(pArray4)
      }
      else {
        setServerProduct(prod)
      }
    }}, [cat])

  useEffect(() => {
    if (cat) {
      if (search !== '') {
        const pArray4 = prod.filter(p => p.category === cat && p.title.toLowerCase().includes(search))
        setServerProduct(pArray4)
      }
      else {
        const pArray4 = prod.filter(p => p.category === cat)
        setServerProduct(pArray4)
      }
    } else {
      if (search !== '') {
        const pArray4 = prod.filter(p => p.title.toLowerCase().includes(search))
        setServerProduct(pArray4)
      }
      else {
        setServerProduct(prod)
      }

    }
  }, [search])

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="container">
        <div className="categories">
          <h3>Kategoriler</h3>
          {
            cat ? (
            <CloseIcon
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() => (
              setCat()
            )} />) : ''
          }
          {category.map((c) =>
            <Category key={c.id} category={c} prod={prod} serverProduct={serverProduct} setServerProduct={setServerProduct} setCat={setCat} />
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