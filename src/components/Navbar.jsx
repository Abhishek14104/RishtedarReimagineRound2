import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className='w-full h-[5%] z-50 bg-transparent absolute top-0 flex justify-between items-center px-20 mt-2 text-[20px] font-semibold text-white text-opacity-75'>
      <div className='flex justify-between w-[25%]'>
        <div className=''>MENU</div>
        <div className=''>MODELS</div>
      </div>

      <div className='h-[60%]'>
        <img src={logo} className='h-[100%]' alt="Logo"/>
      </div>

      <div className='flex justify-between w-[25%]'>
        <div className=''>CONTACT</div>
        <div className=''>ACCOUNT</div>
      </div>
    </div>
  );
}

export default Navbar;
