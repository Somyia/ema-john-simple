import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const addedCart = [];
        //atep 1: get id
        for (const id in storedCart){
            //step 2: get product according to id
            const savedProduct = products.find(product=> product.id ===id);
            //step 3: get guantity from local storage
            if(savedProduct){
                const quantity = storedCart[id];
                // step 4: add quantity to product
                 savedProduct.quantity = quantity;
                // step 5: add saved product to added cart
                 addedCart.push(savedProduct);
            }
        }
        // step 6: add to set cart
        setCart(addedCart)

    },[products])

    const addToCart = (product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product => <Product
                    key={product.id}
                    product ={product}
                    addToCart={addToCart}
                ></Product>)
               }
            </div>
            <div className='cart-container'>
               <Cart 
               key={cart.id}
               cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;