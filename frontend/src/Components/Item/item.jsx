import React from 'react'
import './item.css'

export const item = (props) => {
  return (
    <div className='item'>
        <img src = {props.img} style = {{width:'300px'}} alt = "" />
        <p style = {{width:'300px'}}>{props.name}</p>
        <div className="item-prices" style = {{width:'300px'}}>
            <div className="item-price-new">
            &#8377;{props.new_price}
            </div>
            <div className="item-price-old">
            &#8377;{props.old_price}
            </div>
        </div>
    </div>
  )
}

export default item;
