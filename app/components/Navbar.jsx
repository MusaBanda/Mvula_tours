'use client'
import React from 'react';
import { hooks } from '../hooks/Hooks';
import { useRouter } from "next/navigation";

function Navbar() {
  const { smallscreen } = hooks();

  const router = useRouter();
  const goToForm = (formNumber) => {
    router.push(`/booking?form=${formNumber}`);
  };

  return (
    <div className={`bg-[#000000] text-white items-center flex justify-center p-4 `}>
        <div className={` ${smallscreen ? 'h-[21vh]' : ' h-[7vh] mt-[3vh]'}`}> 
            <img className={` ${smallscreen ? 'mx-auto flex mt-[-1vh]' : 'mt-[-6vh] absolute left-3 '} `}
            src='logo/logo2.png' width='200vw' />
            <ul className={`
              ${smallscreen ? 'mt-9 text-center text-[2vh] flex space-x-4' : 'flex space-x-4 border-r-2 border-l-2 border-gray-600 pr-4 pl-4'}`}>
                <li><a className='cursor-pointer' onClick={() => goToForm(2)}>Upcoming Tours</a></li>
                <li><a className='cursor-pointer border-l-2 border-gray-600 pl-4' href="#Body3">About Us</a></li>
                <li><a className='cursor-pointer border-l-2 border-gray-600 pl-4' href="gallery">Gallery</a></li>
                <li><a className='cursor-pointer border-l-2 border-gray-600 pl-4' href="contact/contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
