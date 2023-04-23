import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi,I'm <span className=' bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-[#ff6600] to-[#ffaf7a]'>Sriram</span></h1>
            <p className={`${styles.heroSubText}`}>I develop Full stack web applications</p>
          </div>
        </div>
        
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration: 1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero