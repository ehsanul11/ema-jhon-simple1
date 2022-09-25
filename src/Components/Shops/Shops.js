import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Carts/Cart';
import Product from '../Product/Product';
import './Shops.css'
const Shops = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
    
    useEffect(() => {
        fetch('products.json') 
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product)
        // DO NOT DO THIS cart.push(product)
        const newCart = [...cart, product]
       setCart(newCart) 
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            } 
           </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart> 
            </div>
            
        </div>
    );
};

export default Shops;