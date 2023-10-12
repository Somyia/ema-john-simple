import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    console.log(cart)

    let total =0;
    let totalShipping =0;
    for (let product of cart){
        total= total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Totoal Shipping : ${totalShipping} </p>
            <p>Tax : ${tax.toFixed(2)} </p>
            <h6>Grand Total : ${grandTotal.toFixed(2)} </h6>

            <button className='cart-btn'>Clear Cart</button>
            <button className='cart-btn red'>Review Order</button>
        </div>
    );
};

export default Cart;