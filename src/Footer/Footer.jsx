import React from 'react'
import footerLogo from '../components/asset/footerLogo.png'
import whatsappLogo from '../components/asset/whatsappLogo.png'
import igLogo from '../components/asset/igLogo.png'
import pinterestLogo from '../components/asset/pinterestLogo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-con justify-center items-center gap-[50px] md:h-fit sm:h-fit'>
            <img className='flex items-center gap-[20px] h-[220px] w-[220px] ' src={footerLogo} alt='Shoe Central' />
        </div>
        <ul className='flex gap-[50px] font-[20px] text-[#252525] list-none items-center justify-center '>
            <li className=' cursor-pointer'>Company</li>
            <li className=' cursor-pointer'>Products</li>
            <li className=' cursor-pointer'>Offices</li>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Help</li>
        </ul>
        <div className=' flex gap-[20px] items-center justify-center'>
            <div className=' cursor-pointer p-[10px] pb-[6px] h-[50px] w-[50px] bg-[#fbfbfb] 
            border-solid border-[1px] border-[#ebebeb] '>
                <img src={igLogo} alt="Instagram" />
            </div>
            <div className=' cursor-pointer p-[10px] pb-[6px] h-[50px] w-[50px] bg-[#fbfbfb] 
            border-solid border-[1px] border-[#ebebeb] '>
                <img src={pinterestLogo} alt="Pinterest" />
            </div>
            <div className=' cursor-pointer p-[10px] pb-[6px] h-[50px] w-[50px] bg-[#fbfbfb] 
            border-solid border-[1px] border-[#ebebeb] '>
                <img src={whatsappLogo} alt="Whatsapp" />
            </div>
        </div>
        <div className='flex flex-col items-center gap-[30 px] w-full mb-[30px] font-[20px] text-[#1a1a1a]'>
            <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7] ' />
            <p className='font-[]'>Copyright @ 2024 All right Reserve</p>
        </div>
    </div>
  )
}

export default Footer