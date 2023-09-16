import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

const ProjectCard = () => {
  return (
    <div 
        className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className='flex items-center justify-between'>
        <FaRegFolder className='text-4xl text-textGreen' />
        <RxOpenInNewWindow className='text-4xl hover:text-textGreen' />
      </div>
      <div>
        <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen '>Project name</h2>
        <p className='text-sm mt-3'>TypeScript allows both type aliases and interface to be nested. An object typed with a nested interface should have all its properties structured the same way as the interface definition.</p>
      </div>
      
        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
            <li>React</li>
            <li>React</li>
            <li>React</li>
        </ul>
     
    </div>
  )
}

export default ProjectCard
