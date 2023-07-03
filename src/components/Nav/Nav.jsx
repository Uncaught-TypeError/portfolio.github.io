import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import {Link} from 'react-scroll'


const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex md:justify-around justify-between items-center md:p-0 px-4 bg-[#fafeff] text-black z-50'>
        <div>
            <span className='text-3xl font-bold text-[black]'>N.Dev</span>
        </div>
        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        {/* Hamburger */}
        <div className='md:hidden z-10' onClick={handleClick}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute md:hidden top-0 left-0 w-full h-screen bg-[#ececec] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social Menu */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul className=''>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='www.linkedin.com/in/aung-chit-minn-dev' class='flex justify-between items-center w-full'>
                        <span className='text-white tracking-wider'>Linkedin</span>
                        <FaLinkedin size={30} className='text-white' />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                    <a href='https://github.com/Uncaught-TypeError' class='flex justify-between items-center w-full'>
                        <span className='text-white tracking-wider'>Github</span>
                        <FaGithub size={30} className='text-white' />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-300'>
                    <a href='mailto:aungchitminn.dev@gmail.com' class='flex justify-between items-center w-full'>
                        <span className='text-white tracking-wider'>Email</span>
                        <HiOutlineMail size={30} className='text-white' />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href='AungChittMinn.pdf' download="CV.pdf" class='flex justify-between items-center w-full'>
                        <span className='text-white tracking-wider'>Resume</span>
                        <BsFillPersonLinesFill size={30} className='text-white' />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav