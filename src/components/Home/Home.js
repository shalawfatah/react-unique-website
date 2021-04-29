
import './Home.css'
import React from 'react'
import Navbar from '../Header/Navbar'
import Item from '../Item/Item'

const Home = () => {
    return (
        <div className="home-container">
          <Item icon={'hi'} title='Celebration' />
        </div>
    )
}

export default Home