import React from 'react';
import exclusive_img from '../asset/exclusive_img.svg';

const Offers = () => {
  return (
    <div className="offers flex flex-col items-center">  {/* Remove mt-[1000px] */}
      <h1 className="text-5xl font-bold text-center text-[#171717]">
        EXCLUSIVE FOR YOU
      </h1>
      <hr className="w-full h-[6px] bg-[#b91c1c] rounded-lg" />

      <div className="image-container relative">
        <img
          src={exclusive_img}
          alt="exclusive offer"
          className="w-[700px] h-[400px] object-cover object-fit: contain rounded-lg md:h-auto" // Adjust height on medium screens
        />
        <div className="button-container absolute bottom-12 right-14 flex justify-center
         items-center text-[30px] font-[800] z-index-1">
          <button className="bg-[#b91c1c] text-white px-4 py-2 rounded-full w-auto">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
