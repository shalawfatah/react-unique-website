
import React from 'react'
import Search from '../Search/Search'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header-container">
            <ul className="navbar">
                <li className="nav-item">Blog</li>
                <li className="nav-item">Hobbies</li>
                <li className="nav-item">My Story</li>
                <li className="nav-item">Wishlist</li>
                <li className="nav-item">Resumee</li>
            </ul>
            <Search />
        </div>
    )
}

export default Navbar
