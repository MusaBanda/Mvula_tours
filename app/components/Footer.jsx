import React from 'react';
import { hooks } from '../hooks/Hooks';


function Footer() {

  const { smallscreen } = hooks();

  return (
    <div className={`bg-[#000000] text-white text-center ${smallscreen ? 'flex-col' : '  p-[1vh] '}`}>
      <div className='p-[2vw]  items-center justify-center flex flex-col'>
        <img className='mt-[-2vh]' src='/logo/logo2.png' width='200vw' height='' />
        <p className="text-sm mt-[0vh]">Your gateway to unforgettable travel experiences.</p>
      </div>
      <div>
        <ul className={` border-t-2 border-b-2 border-gray-600 pb-[1vw] pt-[1vw] pl-[1vw] w-[50%] space-x-4 mt-2 
          ${smallscreen ? 'w-full' : 'flex justify-center  absolute left-0 '}`}>
          <li><a href="/" className="text-gray-400">Privacy Policy</a></li>
          <li className="inline-block mx-2"><a href="/" className="text-gray-400">Terms of Service</a></li>
          <li className="inline-block mx-2"><a href="/" className="text-gray-400">Contact Us</a></li>
        </ul>
        <ul className={` border-t-2 border-b-2 border-gray-600 pb-[1vw] pt-[1vw] pl-[1vw] w-[50%] space-x-4 mt-2 
          ${smallscreen ? 'w-full' : 'flex justify-center  absolute right-0 '}`}>
          <li className="">Follow us on:</li>
          <li className="inline-block mx-2"><a href="/" className="text-gray-400">Facebook</a></li>
          <li className="inline-block mx-2"><a href="/" className="text-gray-400">Twitter</a></li>
          <li className="inline-block mx-2"><a href="/" className="text-gray-400">Instagram</a></li>
        </ul>
      </div>
      <p className={` ${smallscreen ? 'pt-[5vh]' : 'pt-[13vh]'}`}
      >2025 copyright &copy;  Mvula Tours Online Travel Operations Pty LTD </p>
      <div className='flex justify-start  p-[1vh]'>
        <ul className={`left-0 pl-[1vw] ${smallscreen ? 'w-full' : 'w-[50%]'}`}>
          <li>Need Help ?</li>
          <li><a href="/" className="text-gray-400 ">FAQ</a></li>
          <li><a href="/" className="text-gray-400 ">Support</a></li>
        </ul>
        <ul className={`right-0 pl-[1vw] ${smallscreen ? 'w-full' : 'w-[50%]'}`}>
          <li>Contact Us:</li>
          <li><a href="/" className="text-gray-400 ">Email: info@mvula.com</a></li>
          <li><a href="/" className="text-gray-400 ">Phone: +123456789</a></li>
        </ul>
        <ul className={`right-0 pl-[1vw] ${smallscreen ? 'w-full' : 'w-[50%]'}`}>
          <li>Plan your trip:</li>
          <li><a href="/" className="text-gray-400 ">Group Booking</a></li>
          <li><a href="/" className="text-gray-400 ">Couple Booking</a></li>
          <li><a href="/" className="text-gray-400 ">Family Booking</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
