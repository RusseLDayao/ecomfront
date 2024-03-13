import React, { useState } from 'react'
import './Navbar.css'
import logo from '../asset/logo.svg'
import cart_icon from '../asset/cart_icon.svg'
import { Link } from 'react-router-dom'


export const Nabvar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='nav-bar flex justify-around shadow-xl '>
      <div className=" w-[150px] h-[150px] m" >
        <img src={logo} alt="Sneaker Central" /> 
      </div>
      <ul className='flex flex-row text-lg font-bold items-center cursor-pointer gap-[50px] '>
        <li onClick={() => {setMenu("newDrop")}}> <Link to='/newDrop'>New Drop!</Link> {menu==="newDrop"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
        <li onClick={() => {setMenu("mens")}}><Link to='/mens'>Mens</Link> {menu==="mens"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
        <li onClick={() => {setMenu("womens")}}> <Link to='/womens'>Womens</Link>  {menu==="womens"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
        <li onClick={() => {setMenu("kids")}}> <Link to='/kids'>Kids</Link>  {menu==="kids"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>}</li>
      </ul>
      <div className='login-buttom flex items-center gap-[45px] '>
        <Link to='/login' > <button className='cursor-pointer rounded-[75px] border-solid border-2 border-[#515151] w-[100px] 
        h-[50px] font-bold text-[#030712]'>Login</button> </Link>
        <Link to='/cart'> <img src={cart_icon} alt="Cart icon" className="w-[40px] h-[40px] cursor-pointer " /> </Link>
        <div className='cart_item_count w-[22px] h-[22px] flex justify-center mt-[-35px] ml-[-55px] rounded-[11px] text-[#f8fafc]
        bg-[#dc2626] text-base '>5</div>
      </div>
    </div>
  )
}
