import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import Search from "./components/Search";
import Category from "./components/Category";
import Basket from './components/Basket';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import products from './product.json';
import category from './category.json';
import { useState, useEffect } from "react";

function App() {

  const productArray = []
  Object.keys(products).map(key=>{
    productArray.push(products[key])
  })


  const [basket,setBasket]= useState([])
  const [total,setTotal]= useState(0)
  const [search,setSearch] = useState('')
  const [prod,setProd]= useState(productArray)

  useEffect(()=>{
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  },[basket])
  
  

  useEffect(()=>{
  },[prod])

  useEffect (()=>{
    setProd(productArray.filter(prod=>prod.title.toLowerCase().includes(search)))        
  },[search])

  return (
    <>
      <Header />
      <Search search={search}  setSearch={setSearch} />
      <div className="container">
        <div className="categories">
          <h3>Kategoriler</h3>
          {category.map((c)=>
          <Category key={c.id} category={c} />
        )}
        </div>
        <div className="products">
        {
          prod.map((prodItem)=>(
             <Product key={prodItem.id} product={prodItem} basket={basket} setBasket={setBasket} />             
          ))
        }
        
        </div>
        <div className="basket">
            <ShoppingBasketIcon />
            <p>Sepetim</p>
            {
              basket.map((b)=>(
                <Basket key={b.id} basket={b} total={total} setTotal={setTotal} />
              ))
            }
            <div className="total-price">
            <p>Toplam : ₺{total}</p> 
            </div>  
        </div>
      </div>
    </>
  );
}

export default App;
