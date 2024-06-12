import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm({ addProduct }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ id: Date.now(), title, price: parseFloat(price), image, rating: parseInt(rating) });
        setTitle('');
        setPrice('');
        setImage('');
        setRating('');
    };

    return (
        <div className="productDetails">
            <form className="productForm" onSubmit={handleSubmit}>
                <h2>Add a New Product</h2>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Rating:
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        min="0"
                        max="5"
                        required
                    />
                </label>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;
