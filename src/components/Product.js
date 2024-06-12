import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating, addToCart, isInCart }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
            </div>
            <img src={image} alt={title} />
            <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            <div className="product__buttons">
                {!isInCart && (
                    <button onClick={() => addToCart({ id, title, image, price, rating })}>Add to Cart</button>
                )}
            </div>
        </div>
    );
}

export default Product;
