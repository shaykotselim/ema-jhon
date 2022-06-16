import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart)
    const {cart} =props
    let total = 0 ;
    let shipping = 0;

    // let tax = 5;
    for(const product of cart){
            total = total + product.price  
            shipping = shipping + product.shipping
            // let totalShipping = total + shipping  
            // tax = tax / 100 * totalShipping 
    }
        const tax = 5 / 100 * (total + shipping)
        const totalbeforTax = total + shipping;
        const grandTotal = totalbeforTax + tax
        const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='cart-contaniner'>
                <h3>Order Summary</h3>
                <p>Item Order</p>
                    <div className='orderdetails'>
                        <div className='cost'>
                            <div>
                                 <p>Items :</p>
                                 <p>Shipping & Handling :</p>
                                 <p>Total before tax :  </p>
                                 <p>Estimated Tax :     </p>
                                 <h4>Order Total :</h4>
                            </div>
                            <div className='cost2'>
                                <p>$ {props.cart.length.toFixed(2)} </p>
                                <p>$ {shipping.toFixed(2)}</p>
                                <p>$ {totalbeforTax.toFixed(2)}</p>
                                <p>$ {tax.toFixed(2)}</p>
                                <h4>$ {grandTotal.toFixed(2)}</h4>
                            </div>
                        </div>
                        
                        <button className='review-order'>{element} Review-Order</button>
                    </div>
        </div>
    );
};

export default Cart;