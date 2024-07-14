import React, { useRef } from 'react'
import LandingPage from './sections/LandingPage'
import Experience from './sections/Experience'
import Navbar from './components/Navbar'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from 'lenis/react'
import Showcase911 from './sections/Showcase911';

function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <ReactLenis root>
      <div ref={ref} className='font-porsche relative'>
        {/* <div className='w-full h-screen absolute'>
          <motion.div id='scroll-bar' className='w-full h-2 bg-black z-50 sticky top-[99vh]' />
        </div> */}
        <Navbar />
        <LandingPage />
        <Experience />
        <Showcase911 />
      </div>
    </ReactLenis>
  )
}

export default App
