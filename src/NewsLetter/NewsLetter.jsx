import React from 'react';

const NewsLetter = () => {
  return (
    <div
      className={`bg-gradient-to-b from-red-800 via-pink-700 to-pink-200 rounded-lg px-4 py-8 md:px-8 md:py-12`}
    >
      <h1 className='text-white text-center text-3xl font-bold leading-tight md:text-5xl md:leading-snug'>
        Stay Updated on What is Hot in the Market!<br />
        Get Exclusive Offers from us.
      </h1>
      <p className='text-white text-center text-base font-light md:text-xl'>
        Subscribe to our newsletter now
      </p>
      <div className='flex items-center justify-between bg-white rounded-lg border border-gray-300 mb-4'>
        <input
          className='w-full px-4 py-3 rounded-none outline-0 text-black font-poppins text-sm md:w-full md:px-8 md:py-4'
          type='email'
          placeholder='Enter your email'
        />
        <button
          className='w-full py-2 px-4 bg-black text-white text-base font-medium rounded-lg md:py-3 md:px-8 md:w-auto'
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
