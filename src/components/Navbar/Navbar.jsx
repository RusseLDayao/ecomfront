import React from 'react'
import './Navbar.css'
import logo from '../asset/logo.svg'
// eslint-disable-next-line
import cart_icon from '../asset/cart_icon.svg'


export const Nabvar = () => {
  return (
    <div className='nav-bar flex justify-around shadow-xl '>
      <div className=" w-[150px] h-[150px] m" >
        <img src={logo} alt="Sneaker Central" /> 
      </div>
      <ul className='flex flex-row text-lg font-bold items-center cursor-pointer gap-[50px] '>
        <li>New Drop! <hr className='border-none hover:bg-[#030712] w-[100%] h-[3px] rounded-[10px]' /> </li>
        <li>Mens <hr className='border-none hover:bg-[#030712] w-[100%] h-[3px] rounded-[10px]'/> </li>
        <li>Womens <hr className='border-none hover:bg-[#030712] w-[100%] h-[3px] rounded-[10px]'/> </li>
        <li>Kids <hr className='border-none hover:bg-[#030712] w-[100%] h-[3px] rounded-[10px]'/> </li>
      </ul>
      <div className='login-buttom flex items-center gap-[45px] '>
        <button className='cursor-pointer rounded-[75px] border-solid border-2 border-[#515151] w-[100px] 
        h-[50px] font-bold text-[#030712]'>Login</button>
        <img src={cart_icon} alt="Cart icon" className="w-[40px] h-[40px] cursor-pointer " />
        <div className='cart_item_count w-[22px] h-[22px] flex justify-center mt-[-35px] ml-[-55px] rounded-[11px] text-[#f8fafc]
        bg-[#dc2626] text-base '>5</div>
      </div>
    </div>
  )
}
