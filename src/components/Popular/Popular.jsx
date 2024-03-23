import React from 'react';
import product_data from '../asset/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular flex-col items-center gap-[10px] h-fit'>
      <h1 className='text-[#171717] text-[50px] font-[800] text-center'>Upcoming 11.11 Sale!</h1>
      <hr className='w-full h-[6px] rounded-[10px] bg-[#b91c1c]' />

      {/* New wrapper with flexbox for horizontal centering */}
      <div className="image-grid flex justify-center">
        <div className='popular-item mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {product_data.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              // No additional class needed for centering
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
