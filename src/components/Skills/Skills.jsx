import React, { useEffect } from 'react'
import images from '../../constants/images'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({
            // duration: 1000,
        });
    }, []);
  return (
    <div name='skills' className='bg-[#ffffff] w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>Skills</p>
                <p className='py-4 tracking-wide'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1000">
                    <img src={images.html} alt='html' className='w-20 mx-auto mt-2' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-blue-200 hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1200">
                    <img src={images.css} alt='html' className='w-20 mx-auto mt-2' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-yellow-200 hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1300">
                    <img src={images.js} alt='html' className='w-20 mx-auto mt-2' />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-red-200 hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1400">
                    <img src={images.laravel} alt='html' className='w-20 mx-auto mt-2' />
                    <p className='my-4'>Laravel</p>
                </div>
                <div className='shadow-md shadow-[#c0ffe5] hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1500">
                    <img src={images.tw} alt='html' className='w-20 mx-auto mt-2' />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#9cdbff] hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1600">
                    <img src={images.react} alt='html' className='w-20 mx-auto mt-2' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500' data-aos="flip-left" data-aos-duration="1700">
                    <img src={images.mysql} alt='html' className='w-28 mx-auto mt-2' />
                    <p className='my-4'>MySQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills