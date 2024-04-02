import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';
import dropdown from '../components/asset/dropdown.png'
import { useState } from 'react';

const ShopCategorie = ({ banner, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { AllProduct } = useContext(ShopContext);
  const handleSortClick = () => {
    setIsOpen(!isOpen); // Toggle state on click
  };

  const filteredProducts = AllProduct.filter((item) => item.category === category);

  return (
    <div className='justify-center'>
      <img src={banner} alt="Banner" />
      <div className='flex justify-between'>
        <p className='pl-[20px] sm:justify-between sm:ml-none md:none'>
          <span className='font-bold'>Showing 1-9</span> out of {filteredProducts.length} products
        </p>
        <div className='pr-[10px]'>
        <div onClick={handleSortClick}  className='flex cursor-pointer border-solid border-gray-400 border-[1px] w-[200px] justify-between px-[5px] font-bold'>
          Sort by <img className='w-[10px] h-[10px] mt-[10px] ml-[5px ] ' src={dropdown} alt="dropdown" />
      </div>
      <div className={`rounded border-[1px] border-gray-400 border-solid justify-left font-semibold cursor-pointer mt-[5px] ${isOpen ? '' : 'hidden'}`}>
            <div className='p-[5px] hover:bg-gray-400'>Below 5000</div>
        </div>
        </div>
      </div>
      <div className="image-grid flex justify-center">
        <div className='popular-item mt-[50px] grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
        <div className="explore-button cursor-pointer mx-auto mt-[50px] flex justify-center items-center w-[200px] h-14   rounded-full  text-white bg-gray-800 text-lg font-semibold md:hover:bg-gray-700">
           Explore More
        </div>

    </div>
      
  );
};

export default ShopCategorie;
