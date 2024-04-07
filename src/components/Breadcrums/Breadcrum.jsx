import React from 'react'
import arrow_sign from '../asset/arrow_sign.png'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-[8px] text-black text-[16px] font-600 capitalize ml-[100px] mt-[20px]'>
        HOME <img className='h-[10px] w-[10px]  mt-[7px]' src={arrow_sign} alt="arrow" /> SHOP <img className='h-[10px] w-[10px] mt-[7px]' src={arrow_sign} alt="arrow" /> {product.category} <img className='h-[10px] w-[10px] mt-[7px]' src={arrow_sign} alt="arrow" /> {product.name}
    </div>
  )
}
