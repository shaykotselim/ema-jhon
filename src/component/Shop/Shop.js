import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    const [cart,setCart] =useState([])

    const handleAddToCart =(product)=>{
            const newCart = [...cart, product]
            setCart(newCart)
    }
    return (
        <div className='shop-container'>
                <div>
                    {
                        products.map(product=><Product     
                                key = {product.key}
                                produc={product}
                                handleAddToCart={handleAddToCart}
                                ></Product>)
                    }
                </div>
                
                <div>
                    <Cart 
                        cart={cart}
                    ></Cart>
                </div>
        </div>
    );
};

export default Shop;