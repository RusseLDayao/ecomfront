import React from 'react';
import exclusive_img from '../asset/exclusive_img.svg';

const Offers = () => {
  return (
    <div className="offers flex flex-col mt-[1000px] items-center min-h-screen p-6">
      <h1 className="text-[50px] font-[800] text-center text-171717]">EXCLUSIVE FOR YOU</h1>
      <hr className="w-full h-[6px] bg-[#b91c1c] rounded-lg" />
      <div className="image-container flex justify-center items-center relative">
        <img src={exclusive_img} alt="exclusive offer" className="w-full h-auto object-cover" />
        <div className="button-container absolute bottom-20 right-40 flex text-[40px] font-[800]">
          <button className="bg-[#b91c1c] text-white px-4 py-2 rounded-full w-[150px] h-[75px]">View</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
