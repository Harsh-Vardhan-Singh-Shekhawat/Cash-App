import React,{useRef} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Frame from '../assets/Frame 1.png'
import phoneImg from '../assets/intro-phone 1.png'
import cubeImg from '../assets/intro-cube 1.png'
import stairImg from '../assets/intro-stairs 1.png'
import cubesImg from '../assets/intro-cubes 1.png'
import pillarImg from '../assets/intro-pillar 1.png'

const Hero = ({ref}) => {

  return (
    <section  className="hero bg-black text-white h-screen">
      <Navbar />
        <div>
            <img className='absolute md:left-60 md:top-12 left-10 top-20' src={cubeImg} alt='cubeImg'></img>
            <img className='absolute md:top-10 md:right-48 right-10 top-10 md:w-[200px] w-[110px]' src={stairImg} alt='stairImg'></img>
        </div>
        <div className='text-white absolute transform -translate-x-1/2 -translate-y-1/2 md:top-1/2 top-[60%] left-1/2 m-auto '>
            <h1 className='cash font-extrabold md:text-[193px] text-[90px] leading-[166px] md:tracking-[0.5px]'>CASH</h1>
            <div className='phoneImg z-10'>
                <img className='absolute m-auto md:-top-[70px] top-[10px] md:w-[370px] w-[200px] left-12 md:left-56' src={phoneImg} alt='phone-img' />
            </div>
            <h1 className='app relative md:bottom-0 bottom-20 font-extrabold md:text-[193px] text-[90px] bg-transparent leading-[166px] tracking-[0.5px] z-20'>APP</h1>
        </div>
        <div>
            <img className='absolute md:left-64 left-10 bottom-10 md:bottom-24 md:w-[188px] w-[70px]' src={cubesImg} alt='cubesImg'/>
            <img className='absolute bottom-0 md:right-80 right-6 md:w-[288px] w-[200px]' src={pillarImg} alt='pillarImg'></img>
        </div> 
      <Footer ref={ref} />
    </section>
  )
}

export default Hero
