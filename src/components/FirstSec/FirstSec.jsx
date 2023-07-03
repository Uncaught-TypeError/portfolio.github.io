import React, { useEffect } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FirstSec = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-white w-full h-screen' name='home'>
        {/* Container */}
        <div className='max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full'>
          <div data-aos="fade-left" data-aos-duration="2000">
            <div className='text-1xl sm:text-2xl'>Hi, my name is</div>
            <h1 className='text-6xl sm:text-8xl font-bold text-yellow-400'>Nick.</h1>
            <Typed className='text-2xl sm:text-3xl font-semibold' strings={['Full-Stack Developer','Web-Designer','Art-Enthusiastic']} typeSpeed={125} backSpeed={145} loop />
            <p  className='py-4 max-w-[800px] tracking-widest'>Passionate and Specializing in creating beautiful and functional websites. Currently, focused on building responsive full-stack websites using <a href='https://laravel.com' className='text-red-500 underline'>Laravel</a>. A teen who is eager to try new things and ambitious. <a href='mailto:aungchitminn.dev@gmail.com' className='underline'>Get in touch!</a></p>
            <div>
                <button className='border-2 group px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-gray-300'>
                    <span className='mr-3'>View Work</span>
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight /> </span>
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FirstSec