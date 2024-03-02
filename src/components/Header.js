import React from 'react';
// images
import Logo from "../assets/logo.jpeg"

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className="flex justify-between items-center">
        {/* logo */}
        <a className="h-[84px] w-[84px]" href='#'>
          <img src={Logo} className='rounded-full' alt="" />
        </a>
        {/* button */}
        <a href="https://github.com/bhavithran1">
          <button className='btn btn-sm'>Work with me</button>
          </a>
      </div>
    </div>
  </header>;
};

export default Header;
