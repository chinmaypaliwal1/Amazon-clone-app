import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <Link to="/" ><img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" /></Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <button className="header__searchButton">Search</button>
            </div>
            <div className="header__nav">
            <div className="header__option">
                 <Link to="/add-product"className="header__cartLink"> 
                 <span className="header__optionLineOne">Add</span>
                 <span className="header__optionLineTwo">Product</span></Link>
            </div>
                <div className="header__option">
                <Link to="/cart" className="header__cartLink">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Cart</span>
                </Link>
            </div>
           
                
            </div>
        </div>
    );
}

export default Header;
