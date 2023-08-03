import React from 'react'
import Logo from '../assets/Vector.png'
import EyeImg from '../assets/eye.png'
const Navbar = () => {
  return (
    <nav className='text-white flex justify-between px-[61px] py-[10px]'>
        <div>
            <img src={Logo} alt='logo' ></img>
        </div>
        <div className='flex items-center'>
            <ul className='text-[12px]  w-full font-semibold leading-[18px] flex gap-[24px] bg-transparent'>
                <li>SIGN IN</li>
                <li>LEGAL</li>
                <li>LICENCES</li>
                <li>SECURITY</li>
                <li>CAREERS</li>
                <li>PRESS</li>
                <li>SUPPORT</li>
                <li>STATUS</li>
                <li>CODEBLOG</li>
            </ul>
        </div>
        <div>
            <img src={EyeImg} alt='eye-img'></img>
        </div>
      </nav>
  )
}

export default Navbar
