'use client'
import React from 'react';
import { hooks } from '../hooks/Hooks';


function Navbar() {
  const { smallscreen } = hooks();

  return (
    <div className={`bg-[#000000] text-white items-center flex justify-center p-4 `}>
        <div className={` ${smallscreen ? 'h-[21vh]' : ' h-[7vh] mt-[3vh]'}`}> 
            <img className={` ${smallscreen ? 'mx-auto flex mt-[-2vh]' : 'mt-[-6vh] absolute left-3 '} `}
            src='logo/logo2.png' width='200vw' />
            <ul className={`
              ${smallscreen ? 'text-center text-[2vh] flex space-x-4' : 'flex space-x-4 border-r-2 border-l-2 border-gray-600 pr-4 pl-4'}`}>
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
