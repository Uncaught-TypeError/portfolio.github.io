import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        }); // Initialize AOS
    }, []);

    const [words, setWords] = useState(['Dedicated', 'Project Management', 'Strong Decision Maker', 'Problem Solver', 'Artistic', 'Innovative', 'Service-focused']);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Define a timer function to update the index
        const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [currentIndex, words.length]);
  return (
    <div name='about' className='w-full h-screen text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-[#f5f5f5]'>
            {/* <div className='bg-white shadow-gray-400 shadow-lg hover:scale-105 transform transition-transform'> */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 md:gap-8 sm:gap-8 gap-0'>
                    <div className='sm:text-right pt-2 pb-6 pl-4' data-aos="fade-right">
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About</p>
                    </div>
                    <div className='md:text-4xl text-3xl font-bold inline pt-2 pb-6 pl-4 lg:pl-0' data-aos="fade-left">
                        <span className='text-yellow-400'>[ </span>
                        <span className='tracking-wider'>{words[currentIndex]}</span>
                        <span className='text-yellow-400'> ]</span>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold sm:text-right '>
                        <p data-aos="fade-right">Welcome & Nice to meet you. Please take a look around</p>
                    </div>
                    <div className='text-black'>
                        <p className='pb-2' data-aos="fade-left">
                            A junior web developer and designer with a passion for creating visually appealing and user-friendly websites. I may be early in my career, but I bring a strong foundation in web development and a keen eye for design. With a focus on continuous learning, I stay up-to-date with the latest front-end technologies and frameworks. 
                        </p>
                        <ul className='list-disc hidden md:block' data-aos="fade-left">
                            <li >To collaborate with clients to bring their unique visions to life</li>
                            <li>Crafting intuitive user-interfaces and seamless digital experiences</li>
                            <li>Contribute skills and grow as a professional in this dynamic field</li>
                        </ul>
                        <ul className='md:hidden block cursor-text' data-aos="fade-left">
                            <li >To collaborate with clients to bring their unique visions to life</li>
                            <li>Crafting intuitive user-interfaces and seamless digital experiences</li>
                            <li>Contribute skills and grow as a professional in this dynamic field</li>
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default About