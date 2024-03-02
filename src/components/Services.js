import React from 'react';

import HTML from '../assets/tools/html.png';
import CSS from '../assets/tools/css.png';
import JavaScript from '../assets/tools/javascript.png';
import ReactImg from '../assets/tools/react.png';
import Tensorflow from '../assets/tools/tensorflow.png';
import Python from '../assets/tools/python.png';
import GitHub from '../assets/tools/github.png';
import Tailwind from '../assets/tools/tailwind.png';

// motion 
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants"

const Services = () => {
  return (
    <div id='services' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <motion.div
          variants={fadeIn("down", 0.4)} 
          initial="hidden"
          whileInView={"show"} 
          viewport={{once: false, amount: 0.7 }} 
          >
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </motion.div>

          <motion.div
          variants={fadeIn("up", 0.5)} 
          initial="hidden"
          whileInView={"show"} 
          viewport={{once: false, amount: 0.7 }} 
          className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
          >
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tensorflow} alt="HTML icon" />
                  <p className='my-4'>TENSORFLOW</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
          </motion.div>
      </div>
    </div>
  );
};

export default Services;