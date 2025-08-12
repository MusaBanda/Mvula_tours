'use client'
import React from 'react';
import { hooks } from '../hooks/Hooks';


function Navbar() {
  const { smallscreen } = hooks();

  return (
    <div className={`bg-gray-800 text-white items-center flex justify-center p-4 `}>
        <div className={` ${smallscreen ? 'h-[19vh]' : ' h-[7vh] mt-[3vh]'}`}> 
            <h1 className={` ${smallscreen ? 'text-center text-[3vh]' : 'text-2xl font-bold absolute left-3 '} `}>Mvula_Tours</h1>
            <ul className={`
              ${smallscreen ? 'mt-[7vh] flex space-x-4' : 'flex space-x-4 border-r-2 border-l-2 border-gray-600 pr-4 pl-4'}`}>
                <li><a className='' href="/">Upcoming Tours</a></li>
                <li><a className='border-l-2 border-gray-600 pl-4' href="/">About Us</a></li>
                <li><a className='border-l-2 border-gray-600 pl-4' href="gallery">Gallery</a></li>
                <li><a className='border-l-2 border-gray-600 pl-4' href="contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
