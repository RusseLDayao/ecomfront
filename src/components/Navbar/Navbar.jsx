import React, { useState } from 'react'
import './Navbar.css'
import logo from '../asset/logo.svg'
import cart_icon from '../asset/cart_icon.svg'
import { Link } from 'react-router-dom'
import close from '../asset/close.svg'
import menu1 from '../asset/menu1.svg'

export const Nabvar = () => {

  const [toggle, setToggle] = useState(false);

    const [menu,setMenu] = useState("shop");

  return (
    <div className='nav-bar flex justify-around shadow-xl '>
      <div className=" w-[150px] h-[150px] flex" >
        <img src={logo} alt="Sneaker Central" /> 
      </div>
      <ul className='text-lg font-bold items-center cursor-pointer gap-[50px] sm:flex hidden'>
        <li onClick={() => {setMenu("newDrop")}}> <Link to='/newDrop'>New Drop!</Link> {menu==="newDrop"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
        <li onClick={() => {setMenu("mens")}}><Link to='/mens'>Mens</Link> {menu==="mens"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
        <li onClick={() => {setMenu("womens")}}> <Link to='/womens'>Womens</Link>  {menu==="womens"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
        <li onClick={() => {setMenu("kids")}}> <Link to='/kids'>Kids</Link>  {menu==="kids"?<hr className='border-none bg-[#030712] 
        w-[100%] h-[3px] rounded-[10px]'/>:<></>}</li>
      </ul>

      <div className={ ` sm:hidden flex flex-1 justify-end items-center
       font-bold pt-[60px] pr-[8px]` }>
          <img src={toggle ? close : menu1} onClick={() => setToggle((prev) => !prev )} 
          alt="menu" className='w-[50px] h-[50px] object-contain justify-end'/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className=' list-none flex text-lg font-bold items-center cursor-pointer gap-[50px] text-white flex-col'>
              <li onClick={() => {setMenu("newDrop")}}> <Link to='/newDrop'>New Drop!</Link> {menu==="newDrop"?<hr className='border-none bg-[#f8fafc] 
              w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
              <li onClick={() => {setMenu("mens")}}><Link to='/mens'>Mens</Link> {menu==="mens"?<hr className='border-none bg-[#f8fafc] 
              w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
              <li onClick={() => {setMenu("womens")}}> <Link to='/womens'>Womens</Link>  {menu==="womens"?<hr className='border-none bg-[#f8fafc] 
              w-[100%] h-[3px] rounded-[10px]'/>:<></>} </li>
              <li onClick={() => {setMenu("kids")}}> <Link to='/kids'>Kids</Link>  {menu==="kids"?<hr className='border-none bg-[#f8fafc] 
              w-[100%] h-[3px] rounded-[10px]'/>:<></>}</li>
              <li onClick={() => {setMenu("login")}}><Link to='/login'>Login {menu==="login"?<hr className='border-none bg-[#f8fafc] 
              w-[100%] h-[3px] rounded-[10px]'/>:<></>}</Link></li>
              <li onClick={() => {setMenu("cart")}}><Link>Cart{menu==="cart"?<hr className='border-none bg-[#f8fafc] 
              w-[100%] h-[3px] rounded-[10px]'/>:<></>}</Link></li>
          </ul>
        </div>
      </div>

      <div className='login-button items-center w-100 pr-17 sm:gap-[10px] sm:flex hidden '>
        <Link to='/login' > <button className=' cursor-pointer rounded-full border-solid border-2 bg-[#030712] w-[100px] 
        h-[50px] font-bold text-white '>Login</button> </Link>
        <Link to='/cart'> <img src={cart_icon} alt="Cart icon" className="w-[40px] h-[40px] cursor-pointer sm:flex hidden " /> </Link>
        <div className='sm:flex hidden cart_item_count w-[22px] h-[22px]  justify-center mt-[-20px] ml-[-20px] rounded-[11px] text-[#f8fafc]
        bg-[#dc2626] text-base '>5</div>
      </div>
    </div>
  )
}
