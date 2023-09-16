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


const Experience = () => {
    const [activeTab, setActiveTab ] =  useState('Amaris');
  return (
    <section 
        id="experience"
        className=' max-w-containerSmall mx-auto py-10 lgl:py-24 px-4'>
        <SectionTitle title='Experience' num="02" />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <Tabs value={activeTab} orientation="vertical" >
                    <TabsHeader
                        className="rounded-none border-blue-gray-50 bg-transparent p-0 w-[250px]"
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
                                    ? "border-l-2 border-l-textGreen bg-transparent text-textGreen hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium" 
                                    : " border-l-2 border-l-hoverColor bg-transparent text-textDark hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"}
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
