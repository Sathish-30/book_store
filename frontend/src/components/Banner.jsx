import React from 'react'

const Banner= () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full sm:flex-col md:flex-row justify-between items-center gap-12 py-40' >
            <div className='md:w-1/2 flex flex-col gap-4'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell your Books <span className='text-blue-700'>for the bext prices</span></h2>
                <p className='text-lg'>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a book' className='p-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Banner;
