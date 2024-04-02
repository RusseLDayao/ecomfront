import React from 'react'
import Newcollection_data from '../asset/new_collection'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='popular flex-col items-center gap-[10px] h-fit mb-[50px]'>
      <h1 className='text-[#171717] text-[50px] font-[800] text-center'>New Collection</h1>
      <hr className='w-full h-[6px] rounded-[10px] bg-[#b91c1c]' />

      <div className="image-grid flex justify-center">
        <div className='popular-item mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          {Newcollection_data.map((item, i) => (
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
    </div>
  );
}

export default NewCollections