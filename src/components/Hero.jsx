import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Frame from '../assets/Frame 1.png'
import phoneImg from '../assets/intro-phone 1.png'
import cubeImg from '../assets/intro-cube 1.png'
import stairImg from '../assets/intro-stairs 1.png'
import cubesImg from '../assets/intro-cubes 1.png'
import pillarImg from '../assets/intro-pillar 1.png'

const Hero = () => {
  return (
    <section  className="hero bg-black text-white h-screen">
      <Navbar />
        <div>
            <img className='absolute left-64 top-10' src={cubeImg} alt='cubeImg'></img>
            <img className='absolute top-10 right-48' src={stairImg} alt='stairImg'></img>
        </div>
        <div className='text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 m-auto '>
            <h1 className='cash font-extrabold text-[193px] leading-[166px] tracking-[0.5px]'>CASH</h1>
            <div className='phoneImg z-10'>
                <img className='absolute -top-[70px] left-56 z-0' src={phoneImg} alt='phone-img' />
            </div>
            <h1 className='app relative font-extrabold text-[193px] bg-transparent leading-[166px] tracking-[0.5px] z-20'>APP</h1>
        </div>
        <div>
            <img className='absolute left-64 bottom-24' src={cubesImg} alt='cubesImg'/>
            <img className='absolute bottom-0 right-80' src={pillarImg} alt='pillarImg'></img>
        </div> 
      <Footer />
    </section>
  )
}

export default Hero
