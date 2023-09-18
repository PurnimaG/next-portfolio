import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

interface Props {
  name: string,
  description: string,
  tech: string[],
  link: string
}

const ProjectCard = ({ name, description, tech, link} : Props) => {
  return (
    <div 
        className="w-full h-80 relative rounded-lg bg-[#112240] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      
      <div className='flex items-center justify-between'>
        <FaRegFolder className='text-4xl text-textGreen' />

        {
          link !== "" && (
            <a href= {link} target="_blank"><RxOpenInNewWindow className='text-4xl hover:text-textGreen' /> </a>
          )
        }
        
      </div>
      <div>
        <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen '>{ name }</h2>
        <p className='text-sm mt-3'>{ description}</p>
      </div>
      
        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap absolute bottom-6'>
            {
              tech && tech.map((item, index) => {
                return(
                  <li key={index} className="hover:text-textGreen">{item}</li>
                )
              })
            }
            
        </ul>
     
    </div>
  )
}

export default ProjectCard
