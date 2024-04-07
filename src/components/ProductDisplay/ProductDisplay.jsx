import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const ProductDisplay = ({ product }) => {
  const { name, image, new_price, old_price, description, heroImage } = product;

  return (
    <div className="relative bg-gray-100 mb-[200px]">

      <div className="h-96 overflow-hidden relative">
        <img
          className="absolute inset-0 object-cover h-full w-full"
          src={heroImage || image} 
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10"></div>
        <div className="absolute bottom-0 flex justify-between items-center px-8 pb-8 z-20">
          <h1 className="text-3xl font-bold text-white">{name}</h1>
          <div className="flex items-center text-white text-lg gap-1">
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6 text-gray-300" />
            <p className="text-gray-400">(69)</p>
          </div>
        </div>
      </div>

      <div className="px-8 py-4 flex flex-col gap-4 h-[400px] md:flex-row md:items-center md:gap-8">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            className="hover:scale-110 duration-[0.6s] object-cover h-[500px] w-[500px] ml-[100px] mt-[200px] rounded-lg"
            src={image} 
            alt={name}
          />
            <div className='flex ml-[100px] mt-[20px] gap-[25px] cursor-pointer  '>
                <img
                    className="hover:scale-110 duration-[0.6s] h-[125px] w-[125px] rounded-lg"
                    src={image} 
                    alt={name}
                />
                <img
                className="hover:scale-110 duration-[0.6s] h-[100px] w-[100px] rounded-lg"
                src={image} 
                alt={name}
            />
            <img
                className="hover:scale-110 duration-[0.6s] h-[100px] w-[100px] rounded-lg"
                src={image} 
                alt={name}
            />
            <img
                className="hover:scale-110 duration-[0.6s] h-[100px] w-[100px] rounded-lg"
                src={image} 
                alt={name}
            />
            </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-2">Description</p>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-xl font-bold text-red-500">
              <span className="line-through mr-2">${old_price}</span>
              ${new_price}
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            <span className="font-bold">Color Description:</span> Colour Shown: Light Lemon Twist/White/Light Lemon Twist
          </p>
          <div className="flex mt-4">
            <h3 className="text-base font-bold text-gray-700 mr-2">Select Size:</h3>
            <div class="flex flex-wrap gap-2">
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 active:bg-blue-500 active:text-white">5</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">5.5</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">7</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">8</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">9</button>
            </div>

            <div className="grid grid-cols-4 gap-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
