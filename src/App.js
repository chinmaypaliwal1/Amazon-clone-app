import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Alert from './components/Alert';
import ProductForm from './components/ProductForm';

function App() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [alert, setAlert] = useState(null);
    const [products, setProducts] = useState([
        {
            id: '12321341',
            title: 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
            price: 29.99,
            image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
            rating: 5,
        },
        {
            id: '49538094',
            title: 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
            price: 239.0,
            image: 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg',
            rating: 4,
        },
    ]);

    const showAlert = (type, msg) => {
        setAlert({ type, msg });
        setTimeout(() => setAlert(null), 3000); 
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        showAlert( 'Product added to cart');
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

        setTotalPrice(prevTotalPrice => prevTotalPrice + product.price);
    };

    const removeFromCart = (productId) => {
        const product = cart.find(item => item.id === productId);
        showAlert( 'Product Removed form the cart');
        if (product) {
            if (product.quantity > 1) {
                setCart(cart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                ));
            } else {
                setCart(cart.filter(item => item.id !== productId));
            }

            setTotalPrice(prevTotalPrice => prevTotalPrice - product.price);
        }
    };

    const addProduct = (product) => {
        setProducts([...products, product]);
        showAlert( 'Product added successfully');
    };

    const handleClick1 = (product) => {
        setCart(cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
        setTotalPrice(prevTotalPrice => prevTotalPrice + product.price);
    };

    const handleClick2 = (product) => {
        if (product.quantity > 1) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            ));
            setTotalPrice(prevTotalPrice => prevTotalPrice - product.price);
        } else {
            setCart(cart.filter(item => item.id !== product.id));
            setTotalPrice(prevTotalPrice => prevTotalPrice - product.price);
        }
    };

    return (
        <Router>
            <div className="app">
                <Header cartCount={cart.length} />
                <Alert alert={alert} />
                
                <Routes>
                    <Route path="/" element={<Home 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart} 
                        cart={cart} 
                        products={products} 
                        handleClick1={handleClick1} 
                        handleClick2={handleClick2} 
                    />} />
                    <Route path="/cart" element={<Cart 
                        cart={cart} 
                        totalPrice={totalPrice} 
                        removeFromCart={removeFromCart} 
                        handleClick1={handleClick1} 
                        handleClick2={handleClick2} 
                    />} />
                    <Route path="/add-product" element={<ProductForm addProduct={addProduct} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
