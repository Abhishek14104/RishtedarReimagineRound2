import React, { useRef } from 'react'
import LandingPage from './sections/LandingPage'
import Experience from './sections/Experience'
import Navbar from './components/Navbar'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from 'lenis/react'
import Showcase911 from './sections/Showcase911';
import HeroSection from './sections/HeroSection';
import LoadingAnimation from './components/LoadingAnimation';
import StartAnimation from './components/StartAnimation';
import ModelSection from './sections/ModelSection';
import Exp from './sections/Exp';
import JourneyToPerfection from './components/JourneyToPerfection';
import Social from './sections/Social';

function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scrollBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ReactLenis root>
      <div ref={ref} className='font-porsche relative'>
        <div className='w-full h-screen bg-transparent absolute'>
          <motion.div id='scroll-bar' style={{ height: scrollBar}} className='w-2 bg-white z-50 fixed right-0 top-0 rounded-b-full mix-blend-difference' />
        </div>
        <Navbar />
        <HeroSection />
        <JourneyToPerfection />
        {/* <StartAnimation /> */}
        {/* <LandingPage /> */}
        <Exp />
        {/* <Experience /> */}
        <Showcase911 />
        <ModelSection />
        <Social />
      </div>
    </ReactLenis>
  )
}

export default App
