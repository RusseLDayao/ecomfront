import React from 'react'
import landing_banner from '../asset/landing_banner.svg'

export const Hero = () => {
  return (
    <div> 
        <div>
          <img className=' cursor-pointer h-[500px] w-[100vw] bg-black' src={landing_banner} alt="air jordan 1 lost & found" />
        </div>
    </div>
  )
}

export default Hero