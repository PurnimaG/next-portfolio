import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { data } from '../data'
import Details from './Details'
import {
    Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  } from "@material-tailwind/react";
import { useMediaQuery } from '@mui/material';


const Experience = () => {
    const [activeTab, setActiveTab ] =  useState('Amaris');
    const smallScreen = useMediaQuery("(max-width: 540px)");
  return (
    <section 
        id="experience"
        className=' max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <SectionTitle title='Experience' num="02" />
        <div className='w-full mt-10  flex flex-col md:flex-row gap-16'>
        <Tabs 
            value={activeTab} 
            orientation={smallScreen ? "horizonal" : "vertical"}  >
                    <TabsHeader
                        className="rounded-none border-blue-gray-50 bg-transparent p-0 md:w-[250px] flex flex-row md:flex-col overflow-scroll pb-3 md:pb-0"
                        indicatorProps={{
                        className: "bg-transparent  shadow-none rounded-none",
                        }}
                    >
                            {data.companies.map((item) => (
                            <Tab 
                                key={item.name} 
                                value={item.name}
                                onClick={() => setActiveTab(item.name)}
                                className={activeTab === item.name 
                                    ? " border-b-2 border-b-textGreen border-l-0 md:border-l-2 md:border-l-textGreen md:border-b-0 bg-transparent text-textGreen hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 md:px-8 font-medium min-w-[136px]" 
                                    : " border-b-2 border-b-hoverColor border-l-0 md:border-l-2 md:border-l-hoverColor md:border-b-0 bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 md:px-8 font-medium min-w-[136px]"}
                            >
                                {item.name}
                            </Tab>
                            ))}
                    </TabsHeader>
                    <TabsBody>
                        <>
                            {
                                data && data.companies.map((item, index) => {
                                return  (
                                    <TabPanel key={index} value={item.name}>
                                        <Details 
                                            company={item.name} 
                                            designation={item.designation} 
                                            startDate= {item.startDate}
                                            endDate={item.endDate}
                                            duties={item.duties}
                                        />
                                    </TabPanel>
                                    
                                    )
                                })  
                            }
                        </>
                    </TabsBody>
                </Tabs>
        </div>


       
    </section>
  )
}

export default Experience 
