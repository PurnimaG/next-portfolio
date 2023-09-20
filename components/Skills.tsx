import React from 'react'
import SectionTitle from './SectionTitle'
import { Bitbucket, CSS, Drupal, GitHub, Graphql, HTML, JavaScript, Jenkins, Mysql, PHP, ReactImg, Redux, Tailwind, Typescript,  } from '@/public/assets/index';
import Image from 'next/image';

const Skills = () => {
  return (
    <section 
        id="skills" 
        className=" max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <SectionTitle title="Skills" num="03" />
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
            <div className='w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 text-center py-8 text-textDark'>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Drupal} alt="Logo" />
                    <p className='my-4'>DRUPAL</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={ReactImg} alt="Logo" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={PHP} alt="Logo" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={HTML} alt="Logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={CSS} alt="Logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={JavaScript} alt="Logo" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={GitHub} alt="Logo" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Tailwind} alt="Logo" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Graphql} alt="Logo" />
                    <p className='my-4'>GRAPHQL</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Typescript} alt="Logo" />
                    <p className='my-4'>TYPESCRIPT</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Redux} alt="Logo" />
                    <p className='my-4'>REDUX</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Jenkins} alt="Logo" />
                    <p className='my-4'>JENKINS</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Bitbucket} alt="Logo" />
                    <p className='my-4'>BITBUCKET</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <Image className='w-20 mx-auto' src={Mysql} alt="Logo" />
                    <p className='my-4'>MYSQL</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
