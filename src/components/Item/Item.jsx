import React from 'react'

export const Item = () => {
  return (
    <div className='item w-[350px] hover:scale-x-105 duration-[0.6s] '>
        <img src={props.image} alt="" />
        <p className='mx-[6px]'>{props.name}</p>
        <div className='item price flex gap-[20px]'>
            <div className='item-price-new text-[#374151] text-[18px] font-[600px]'>
              {props.new_price}
            </div>
            <div className='item-price-old text-[#374151] text-[18px] font-[500px] line-through '>
              {props.old_price}
            </div>
        </div>
    </div>
  )
}
