

import React from 'react'
import items from './icons'
import './Item.css'

const Item = ({icon, title}) => {
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div className="icon-container">
                        <div className="icon" >{item.icon}</div>
                        <p className="title">{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Item
