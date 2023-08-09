import React from 'react'
import Logo from '../assets/Vector.png'
import About from './About';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='text-white flex justify-between md:px-[61px] md:py-[20px]'>
        <div>
            <Link to='/'> <img  src={Logo} alt='logo' ></img></Link>
        </div>
        <div className='flex items-center'>
            <ul className='md:text-[12px] font-semibold leading-[18px] flex md:flex-row flex-col gap-[24px] bg-transparent'>
                <li className=' hover:text-[#00D54B]'><Link to='/signin'>SIGN IN</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/legal'>LEGAL</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/licences'>LICENCES</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/security'>SECURITY</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/career'>CAREERS</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/press'>PRESS</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/support'>SUPPORT</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/status'>STATUS</Link></li>
                <li className=' hover:text-[#00D54B]'><Link to='/codeblog'>CODEBLOG</Link></li>
            </ul>
        </div>
        <div>
            {/* <img src={EyeImg} alt='eye-img'></img> */}
            <About />
        </div>
      </nav>
  )
}

export default Navbar
