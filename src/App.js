import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import Search from "./components/Search";
import Category from "./components/Category";
import Basket from './components/Basket';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import category from './category.json';
import { useState, useEffect } from "react";

function App() {

  const [basket,setBasket]= useState([])
  const [total,setTotal]= useState(0)
  const [search,setSearch] = useState('')
  const [prod,setProd]= useState()
  
  
  const x='Su & İçecekler'

  useEffect(()=>{
    console.log(basket)
    console.log(total)
  },[basket])


  useEffect (()=>{
    //setProd(productArray.filter(prod=>prod.title.toLowerCase().includes(search)))
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
          category.map((cat)=>(
            <>
              {cat.products.map((p)=>(
                <Product key={p.id} product={p} basket={basket} setBasket={setBasket} />                
              ))}
            </>
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
