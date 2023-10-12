import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    console.log(cart)

    let total =0;
    let totalShipping =0;
    let quantity = 0;
    for (let product of cart){
        product.quantity = product.quantity || 1;
        quantity = quantity+ product.quantity;
        total= total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <p>Selected Items: {quantity}</p>
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