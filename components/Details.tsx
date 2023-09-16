import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward} from 'react-icons/ti'

interface Props {
    company: string, 
    designation: string,
    startDate: string, 
    endDate: string, 
    duties: {
        value: string
    }[]
}

const Details = ({ company , designation, startDate, endDate, duties }: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full"
    >
      <h3 className='flex gap-1 font-medium text-xl  font-titleFont'>{designation}</h3>
      <p className='text-sm mt-1 font-medium text-textDark'>{startDate} - {endDate}</p>
      <ul className='mt-6 flex flex-col gap-3'>
        { 
            duties.map((duty, index) => {
                return (
                    <li className='text-base flex gap-2 text-textDark' key={index}>
                        <span className='text-textGreen mt-1'>
                            <TiArrowForward />
                        </span>
                        {duty.value}
                    </li>
                )
            })
        }
      </ul>
    </motion.div>
  )
}

export default Details
