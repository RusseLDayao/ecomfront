import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-[350px] hover:scale-110 duration-[0.6s] '>
        <Link to={`/product/${props.id}`} ><img className='max-h-[500px]' src={props.image} alt="Item" /></Link>
        <p className='mx-[6px]'>{props.name}</p>
        <div className='item-price flex gap-[20px] mx-[6px]'>
            <div className='item-price-new text-[rgb(55,65,81)] text-[18px] font-[600px]'>
              ₱{props.new_price}
            </div>
            <div className='item-price-old text-[#374151] text-[18px] font-[500px] line-through '>
              ₱{props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item