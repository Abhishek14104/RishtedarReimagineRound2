import React, { useState } from 'react';
import TextHover from './TextHover';
import Menu from './Menu';
import mobileLogo from '../assets/logo.webp'

function Navbar() {

  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <div>
      <div className='w-full z-40 absolute top-[10px] flex justify-between items-center md:px-20 pl-8 pr-3 mt-2 md:text-[18px] text-lg font-semibold text-black'>
        <div className='flex justify-start md:w-[25%] w-fit'>
          <div onClick={() => {setMenuOpen(!menuOpen)}} className='w-fit z-50 text-[20px]'>
            <TextHover>
              MENU
            </TextHover>
          </div>
          
        </div>

        <div className='h-[40px] md:w-[300px] flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" className='hidden md:block'>
            <title>Porsche</title>
            <path fill='black' d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
          </svg>
          <img className='w-9 absolute left-1/2 -translate-x-1/2 md:hidden' src={mobileLogo} />
        </div>

        <div className='flex justify-end md:w-[25%] w-fit'>
          <div className='w-fit text-[20px]'>
            <TextHover>
              ACCOUNT
            </TextHover>
          </div>
        </div>

      </div>
      <Menu open={menuOpen} />
    </div>
  );
}

export default Navbar;
