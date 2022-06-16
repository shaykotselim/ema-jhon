import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    console.log(props.produc)
    const {name, img, category, price, stock, seller} = props.produc
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product-container'>
             <div>
                <img src={img} alt="" />
             </div>
             <div className='details'>
                <h4>{name}</h4>
                <p>By : {seller}</p>
                <p>$ {price}</p>
                <p>Item: {category}</p>
                <p>only {stock} left in stock - order soon</p>
                <button 
                onClick={()=>props.handleAddToCart(props.produc)}
                className='cart-button'>{element} add to cart</button>
             </div>   
        </div>
    );
};

export default Product;