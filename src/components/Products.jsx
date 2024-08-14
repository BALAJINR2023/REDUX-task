import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useSearchParams } from "react-router-dom";
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import { useEffect, useState } from "react";
import Product from "./productdemo.jsx"
import React from 'react';
import Data from '../assets/data.json'; // Importing JSON data

const Products = () => {
  const dispatch = useDispatch();
  
  // Set products state with the imported JSON data
  const [products] = useState(Data);

  return (
    <>
      <div className="cart"><Link to="/Cart"><button>VIEW CART</button></Link></div>
      {products.map((product) => (
        <Product
          {...product}
          key={product.id}
          addToCart={() => dispatch(addToCart(product))}
          removeFromCart={() => dispatch(removeFromCart(product.id))}
        />
      ))}
    </>
  );
};

export default Products;

