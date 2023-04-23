import React from 'react';
import {motion } from 'framer-motion';
import { styles } from '../style';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { github } from '../assets';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,speed: 450,
    }} className='p-5 rounded-2xl sm:w-[360px] w-full bg-gradient-to-bl from-black to-[#2c0960] '>
      <div className='relative w-full h-[230px]'>
        <img src={image} alt="name"
        className='w-full h-full object-cover rounded-sm'
        />
      </div>

      
      <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-10 h-10 object-contain'
              />
            </div>
          </div>
        

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>


    </Tilt>
    </motion.div>
  );
};
const Projects = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>To Demonstrate</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <motion.div variants={fadeIn("","",0.1,1)} className='mt-4   text-secondary text-[17px] max-w-3xl leading-[30px]'>
    <p>Following Projects Showcases my skills and experience through real-world examples of my work.&nbsp;Each project is briefly described and demonstrated with links to code repositories and live demos in it.&nbsp;It reflects my ability to solve complex problems work different technologies and manage projects effectively.</p>
    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
    
    </>
  )
}



export default SectionWrapper(Projects , "project");