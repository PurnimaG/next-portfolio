import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
   <section 
    id="contact" 
    className=" max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    <SectionTitle title="What's next?" num="05" />
    <h2 className='font-titleFont text-textGreen text-4xl font-semiBold text-center'> Send me a message!</h2>
    <p className='text-center text-textDark'>Got a question or proposal, or just want to say hello? Go ahead.</p>
    <div name="contact" className='w-full bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/732b9bc1-b892-4f53-a9a7-230ba2608d97" className='flex flex-col max-w-[600px] w-full'>
        <input className=' bg-[#0A192F] border border-textLight p-2 text-textDark' type="text" placeholder='Name' name='name' />
        <input className=' my-4 p-2 bg-[#0A192F] border border-textLight p-2 text-textDark' type="text" placeholder='Email' name='email' />
        <textarea className=' p-2 bg-[#0A192F] border border-textLight p-2 text-textDark'  name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className=' w-auto h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Say Hello</button>
      </form>   
    </div>
   </section>
  )
}

export default Contact
