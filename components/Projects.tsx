import React from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'


const Projects = () => {
  return (
    <section id="projects" className='max-w-containerSmall mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title="Some Things I have Built" num="03" />
    <div className='grid grid-cols-1 md:grid-cols-3 xl-grid-cols-3 gap-6 mt-10 lgl:px-10 '>
        <motion.div 
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.4 }}
        >
            <ProjectCard />
        </motion.div>
        
    </div>
      
    </section>
  )
}

export default Projects
