import React, { useEffect } from 'react'
import images from '../../constants/images'
import {FaLaravel, FaPhp, FaHtml5, FaCss3Alt, FaJava, FaReact} from 'react-icons/fa'
import {SiMysql, SiJavascript, SiThreedotjs} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'
import {DiJavascript1} from 'react-icons/di'
import {BiLogoSpringBoot, BiLogoTailwindCss} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
  return (
    <div className='bg-[#f5f5f5] w-full md:h-screen text-black' name='projects'>
        <div className='max-w-[1000px] mx-auto flex p-4 flex-col justify-center w-full h-full'>
            <div className='pb-3'>
                <p className='text-4xl inline font-bold border-b-4 border-yellow-400'>Projects</p>
                <p className='py-6'>// Projects that i have created</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-white'>
                {/* Items */}
                <div style={{ backgroundImage: `url(${images.pj1})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Medium Inspired Clone
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaLaravel size={40} className='text-red-500' title='laravel' />
                            <FaPhp size={40} className='text-blue-300' title='php' />
                            <SiMysql size={40} className='text-orange-300' title='mysql' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/Media_Website'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj2})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400 bg-center' data-aos="zoom-in-up" data-aos-duration="1200">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Cafe Website
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaHtml5 size={40} className='text-orange-500' title='html' />
                            <FaCss3Alt size={40} className='text-blue-300' title='css' />
                            <DiJavascript1 size={40} className='text-yellow-300' title='js' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/Cafe_Website'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj3})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400 bg-center' data-aos="zoom-in-up" data-aos-duration="1400">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Restaurant Website
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaReact size={40} className='text-green-300' title='react' />
                            <FaCss3Alt size={40} className='text-blue-300' title='css' />
                            <DiJavascript1 size={40} className='text-yellow-300' title='js' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/Gericht_Restaurant'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj4})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400 bg-center' data-aos="zoom-in-up" data-aos-duration="1600">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Blogger Website
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaHtml5 size={40} className='text-orange-500' title='html' />
                            <FaCss3Alt size={40} className='text-blue-300' title='css' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/Blog_Website'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj5})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400 bg-center' data-aos="zoom-in-up" data-aos-duration="1800">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Book Store Website
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaJava size={40} className='text-red-500' title='java' />
                            <BiLogoSpringBoot size={40} className='text-green-300' title='springboot' />
                            <SiMysql size={40} className='text-orange-300' title='mysql' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/Book-Store-System'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj7})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400 bg-center' data-aos="zoom-in-up" data-aos-duration="2000">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            React Inspired Website
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <BiLogoTailwindCss size={40} className='text-blue-500' title='tailwind' />
                            <FaReact size={40} className='text-green-300' title='react' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/react-clone'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj6})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400 bg-center' data-aos="zoom-in-up" data-aos-duration="2200">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Book Store Website
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaHtml5 size={40} className='text-orange-500' title='html' />
                            <FaCss3Alt size={40} className='text-blue-300' title='css' />
                            <DiJavascript1 size={40} className='text-yellow-300' title='js' />
                            <SiThreedotjs size={40} className='text-white' title='threejs' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/Book_Store'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${images.pj8})` }}
                className='group container rounded-md flex justify-center items-center mx-auto content-div border border-yellow-400' data-aos="zoom-in-up" data-aos-duration="2400">
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col'>
                        <span className='text-2xl font-bold text-white text-center flex p-2'>
                            Restaurant System (Admin)
                        </span>
                        <div className='flex justify-evenly align-middle items-center p-2'>
                            <FaLaravel size={40} className='text-red-500' title='laravel' />
                            <FaPhp size={40} className='text-blue-300' title='php' />
                            <SiMysql size={40} className='text-orange-300' title='mysql' />
                        </div>
                        <div className='text-center p-2 flex items-center justify-center border-b border-[gray]'>
                            <a href='https://github.com/Uncaught-TypeError/restaurant-app'>
                                <button className='text-center px-4 py-3 m-2 text-white rounded-lg bg-black font-semibold text-lg flex items-center'>Github <FiGithub size={20} className='text-white ml-2' /> </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 flex justify-center' data-aos="zoom-in-up" data-aos-duration="2200">
                <a href='https://github.com/Uncaught-TypeError?tab=repositories'>
                    <button className='text-center px-4 py-1 m-2 text-black border-[#2e2e2e] hover:bg-yellow-400 hover:border-yellow-400 rounded-lg border font-medium text-lg flex items-center hover:text-black '>View More</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects