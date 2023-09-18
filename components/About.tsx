import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt} from 'react-icons/ai'
import Image from "next/image"
import { profileImage } from "@/public/assets"

const About = () => {
  return (
    <section 
        id="about"
        className=" max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
        <SectionTitle title="About Me" num="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <h3 className='text-lg font-titleFont tracking-wide text-textGreen'> Hello, I'm Purnima,</h3>
                <p>
                    A React web developer with a passion for crafting seamless online experiences. 👨‍💻
                </p>

                <h3 className='text-lg font-titleFont tracking-wide text-textGreen'> What I Do:</h3>

                <p>
                I specialize in building modern web applications using React, the powerhouse of interactive user interfaces. From concept to deployment, I thrive on turning ideas into elegant and responsive web solutions.
                </p>

                <h3 className='text-lg font-titleFont tracking-wide text-textGreen'> Why Me:</h3>
                <p>
                With a keen eye for design and a commitment to performance, I take pride in creating web applications that not only look great but also provide a top-notch user experience.
                </p>

                <p>
                    Here are few technologies I have worked recently
                </p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span> JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span>  React
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span>  MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span>  TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span>  Next.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span> Express.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span> Tailwindcss
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><AiFillThunderbolt /></span> Drupal
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className=" absolute w-full h-80  -left-6 -top-6 rounded-lg">
                    <div className=" w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image className="rounded-lg h-full object-cover" src={profileImage} alt="profileImage"/>
                        <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    </div>
                </div>
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>

            </div>
        </div>
    </section>
  )
}

export default About
