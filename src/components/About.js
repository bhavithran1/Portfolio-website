import React from 'react';
// Icon
import { BsArrowUpRight } from "react-icons/bs";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "UI/UX Design",
    description:" Proficient UI/UX Designer specializing in React.js, creating intuitive interfaces with a keen eye for aesthetics.",
    link: "Learn More",
    arrow_url: "https://www.websitebuilderinsider.com/what-is-ui-ux-design-wikipedia/",
    url: "https://github.com/bhavithran1/Business-React-Website-Example",

  },
  {
    name: "Python Development",
    description:" Proficient Python developer with expertise in frameworks like Django and Flask. Strong problem-solving skills.",
    link: "Learn More",
    arrow_url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    url: "https://github.com/bhavithran1/Crypto-Data-Labeller",
  },
  {
    name: "Machine Learning",
    description:"Proficient in Machine Learning, with expertise in algorithms, data processing, and model development. Passionate about solving complex problems.",
    link: "Learn More",
    arrow_url: "https://en.wikipedia.org/wiki/Machine_learning",
    url: "https://github.com/bhavithran1/Simple-Rl-tradingbot",
  },
  {
    name: "Digital Marketing",
    description:"Proficient in digital marketing, with expertise in social media strategies, data analytics, and campaign optimization.",
    link: "Learn More",
    arrow_url: "https://en.wikipedia.org/wiki/Digital_marketing",
    url: "#work",
  },
]

const About = () => {
  return (
    <section className='section' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & Image */}
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 4 years of experience.
            </h3>
            
            <a href="https://github.com/bhavithran1?tab=repositories" >
              <button className='btn btn-sm'>See My Work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const {name, description, link, arrow_url, url} =  service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={arrow_url} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href={url} className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
