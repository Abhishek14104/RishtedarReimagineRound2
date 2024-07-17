import React, { useState } from 'react'
import { motion, cubicBezier, AnimatePresence, animate } from 'framer-motion';
import TextHover from './TextHover';
import modelsPic from '../assets/menu/models.jpg'
import servicesPic from '../assets/menu/services.webp'
import dealerPic from '../assets/menu/dealer.avif'
import contactPic from '../assets/menu/contact-us.webp'
import lifestylePic from '../assets/menu/lifestyle.jpg'


export default function Menu({ open }) {
  const easing = cubicBezier(.99, -0.01, .53, .99)

  const [index, setIndex] = useState(0);

  const items = ["models", "services", "locate a dealer", "contact us", "porsche lifestyle"]
  const photos = [{
    id: 0,
    photo: modelsPic
  }, {
    id: 1,
    photo: servicesPic
  }, {
    id: 2,
    photo: dealerPic
  }, {
    id: 3,
    photo: contactPic
  }, {
    id: 4,
    photo: lifestylePic
  }]

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial="initial" animate="animate" exit="exit" className='w-full h-screen fixed flex flex-row items-center justify-between top-0 z-10'>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              staggerChildren: 0.05
            }}
            className='absolute top-0 w-full h-screen flex flex-row'>
            <motion.div
              variants={{
                initial: { backgroundColor: "#00000000" },
                animate: { backgroundColor: "#000000ff" },
                exit: { backgroundColor: "#00000000" }
              }}
              transition={{
                duration: 1,
                delay: 0.2
              }}
              className='absolute top-0 w-full h-screen'></motion.div>
            {[1, 2, 3, 4].map((id) => {
              return (
                <motion.div
                  key={id}
                  variants={{
                    initial: { y: "-100%" },
                    animate: { y: "-20%" },
                    exit: { y: "-100%" }
                  }}
                  transition={{
                    ease: easing,
                    duration: 0.7
                  }}
                  className='bg-white h-[180vh] w-1/4 rounded-full'></motion.div>
              )
            })}
          </motion.div>
          <motion.div initial="initial" animate="animate" exit="exit" className='relative uppercase font-semibold text-[2.8vw] ml-[5vw] flex flex-col gap-10'>
            {items.map((item, index) => {
              return (
                <motion.p
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0, transition: { delay: 0.5 + index * 0.1, ease: "linear" } },
                    exit: { opacity: 0, y: -10, transition: { delay: 0 + index * 0.1, ease: "linear" } }
                  }}
                  className='flex flex-row items-center'><div className='bg-black rounded-full mx-5 w-2 h-2'></div><div onMouseEnter={() => { setIndex(index) }} className='w-fit'><TextHover>{item}</TextHover></div></motion.p>
              )
            })}
          </motion.div>
          <motion.div variants={{
            initial: { y: 100, x: 20, opacity: 0 },
            animate: { y: 0, x: 0, opacity: 1, transition: { delay: 1 } },
            exit: { y: 100, x: 20, opacity: 0, transition: { delay: 0.25, ease: "backIn" } }
          }} className='relative mr-[13vw] mt-[5vh] w-[40vw] h-[70vh]'>
            {photos.map((item) => {
              return (
                <AnimatePresence>
                  {(index == item.id) && (
                    <motion.img
                      initial={{ y: 100, x: 20, opacity: 0, rotate: -6 }}
                      animate={{ y: 0, x: 0, opacity: 1, rotate: -6 }}
                      exit={{ y: -100, x: -20, opacity: 0, rotate: -6 }}

                      className='absolute w-[40vw] h-[70vh] -rotate-6 object-cover rounded-3xl' src={item.photo} />
                  )}
                </AnimatePresence>
              )
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
