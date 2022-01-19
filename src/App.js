import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import Search from "./components/Search";
import Category from "./components/Category";

import products from './product.json';
import category from './category.json';
import { useState } from "react";

function App() {

  const [basket,setBasket]= useState([])
  const [total,setTotal]= useState(0)

  return (
    <>
      <Header />
      <Search />
      <div className="container">
        <div className="categories">
          <h3>Kategoriler</h3>
          {category.map((c)=>
          <Category key={c.id} category={c} />
          )}
        </div>
        <div className="products">
          {products.map((product)=>
          <Product key={product.id} product={product} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
