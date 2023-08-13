import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {CgMenuRight} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Logo from '../assets/Vector.png'
import About from './About'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className='navbar text-white flex justify-between md:px-[61px] md:py-[20px] z-50 '>
			<div>
            <Link to='/'> <img  src={Logo} alt='logo' ></img></Link>
            </div>
			<nav  className='md:text-[12px] font-semibold leading-[18px] flex md:flex-row flex-col md:bg-transparent md:ml-28 bg-black z-40' ref={navRef}>
				<Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/signin">SIGN IN</Link>
				<Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/legal">LEGAL</Link>
				<Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/licences">LICENCES</Link>
				<Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/security">SECURITY</Link>
                <Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/careers">CAREERS</Link>
                <Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/press">PRESS</Link>
                <Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/support">SUPPORT</Link>
                <Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/status">STATUS</Link>
                <Link className='transition duration-150 ease-in-out hover:text-[#00D54B] text-underline' href="/codeblog">CODEBLOG</Link>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                <About />
			</nav>
			<button
				className="nav-btn relative left-32"
				onClick={showNavbar}>
				<CgMenuRight />
			</button>
            <div>

            </div>
		</header>
	);
}

export default Navbar;