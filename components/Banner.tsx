import React from 'react'
import { motion } from 'framer-motion'
import { data } from '../data';
import Link from 'next/link';

const Banner = () => {
    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
        e.preventDefault();
        
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);

        elem?.scrollIntoView({
            behavior: "smooth"
        });

        // Update the class name of the clicked link
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
             link.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
    }
  return (
    <section 
        id="home"
        className=' max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3 
            initial={{ y:10, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            transition={{ duration: 0.5, delay:0.6}}
            className='text-lg font-titleFont tracking-wide text-textGreen'>Hi, my name is</motion.h3>
        <motion.h1
            initial={{ y:10, opacity:0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay:0.7}}
            className="text-4xl lgl:text-6xl font-titleFont font-bold flex flex-col"
        >Purnima Gurjar.
            <span className='text-textDark mt-2 lgl:mt-4'>I build things for the web.</span></motion.h1>

        <motion.p 
            initial={{ y:10, opacity:0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='text-base md:max-w-[650px] text-textDark font-medium'>
            {" "}Passionate about creating captivating user interfaces and seamless web experiences. I specialize in crafting visually stunning and responsive websites. With a commitment to clean code and a user-centric approach, I transform ideas into interactive digital realities that engage and delight users.{" "}
            
        </motion.p>
        <Link href="#projects" onClick={handleScroll} className="flex text-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            < motion.button 
                initial={{ y:10, opacity:0 }}
                animate={{ y:0, opacity:1 }}
                transition={{ duration: 0.5, delay: 0.9}}
                className='w-52 h-14 text-sm font-titleFont  border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check out my Projects!
            </motion.button>
        </Link>
       
    </section>
  )
}

export default Banner
