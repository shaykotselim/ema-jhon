import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
                    
                    {/* logo ema-jhon */}
                <img src={logo} alt="" />
                    
                    {/*  navigation Section */}
                    <div className='navigation'>
                        <nav >
                            <a href="/shop">Shop</a>
                            <a href="/inventory">Manage-Inventory</a>
                            <a href="/review">Review</a>
                        </nav>
                    </div>
                        
                        {/* Search area */}
                    <div className='search-container'>
                        <input type="text" placeholder='type to search here...' />
                    </div>

        </div>
    );
};

export default Header;  <h1>This is header Component</h1>