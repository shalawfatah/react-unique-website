
import React from 'react'
import Search from '../Search/Search'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header-container">
            <ul className="navbar">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">News</li>
                <li className="nav-item">Contact</li>
            </ul>
            <Search />
        </div>
    )
}

export default Navbar
