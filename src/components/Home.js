import React from 'react';
import './Home.css';
import Product from './Product';

function Home({ addToCart, removeFromCart, cart, handleClick1, handleClick2, products }) {
    return (
        <div className="home">
            <div className="home__container">
                {/* <img
                    className="home__image"
                    src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1711522557/1711522555.jpg"
                    alt="Amazon Banner"
                /> */}
                <div className="home__row">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                            addToCart={addToCart}
                            handleClick1={handleClick1}
                            handleClick2={handleClick2}
                            removeFromCart={removeFromCart}
                            // isInCart={cart.some((item) => item.id === product.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
