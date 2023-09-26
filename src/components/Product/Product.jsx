import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img, name, seller, quantity,price} = props.product;

    const addToCart = props.addToCart;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" srcset="" />
                <div className='product-info'>
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                    <p className='other-info'>Manufacturer: {seller}</p>
                    <p className='other-info'>Rating: 3 Stars</p>
                </div>
                <button onClick={()=>addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;