import React from 'react';
import './Header.css';

function Cart({ cart, handleClick1, handleClick2, removeFromCart, totalPrice }) {
    return (
        <div className="header__cartDetails">
            {cart.map((product, index) => (
                <div key={index} className="header__cartItem">
                    <img src={product.image} alt={product.title} className="header__cartItemImage" />
                    <div>
                        <p>{product.title}</p>
                        <p>${product.price.toFixed(2)}</p>
                        <div className="product__buttons">
                            <div className="counter-buttons">
                                <button onClick={() => { handleClick2(product); product.quantity === 1 && removeFromCart(product.id); }}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => handleClick1(product)}>+</button>
                            </div>
                            <button className='remove-btn' onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='total-price'><p>Total: ${totalPrice.toFixed(2)}</p></div>
        </div>
    );
}

export default Cart;
