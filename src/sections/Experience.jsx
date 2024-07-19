import React from 'react'
import videoBg from '../assets/Experience/Porsche-bg.mp4';
import TextReveal from '../components/TextReveal';

export default function Experience() {
    return (
        <div className='w-full flex md:flex-row flex-col justify-evenly items-center my-10 md:my-0'>
            <video className='md:w-[30vw] w-[90vw] md:h-[90vh] h-[70vh] rounded-2xl md:mt-[200px] object-cover' autoPlay loop muted id='video'>
                <source src={videoBg} type='video/mp4'></source>
            </video>
            <div className='md:w-[50vw] w-[90vw] md:text-[45px] text-[8vw] leading-none flex flex-col gap-10 mt-[50px] md:mt-0'>
                <div className='block md:hidden'>
                    <TextReveal stagger={0.01} leading='leading-tight'>
                        Anyone who dreams of a Porsche usually has one image in their mind: the 911 has been the epitome of an exciting, powerful sports car with day-to-day usability for 60 years.
                    </TextReveal>
                </div>
                <div className='hidden md:block'>
                    <TextReveal stagger={0.01} leading='leading-tight'>
                        Anyone who dreams of a Porsche usually has one image in their mind: the 911 has been the epitome of an exciting, powerful sports car with day-to-day usability for 60 years.
                        Take a seat behind the wheel of the new 911 and become part of a unique community.
                        The new T-Hybrid technology was derived from motorsport and combines emotive engine sound with outstanding performance.
                    </TextReveal>
                </div>

                <div className='border-black font-semibold border-[2px] rounded-full md:text-[1.6vw] text-[5.5vw] md:py-9 py-5 md:px-10 px-8 w-fit flex items-center gap-2'>
                    Discover The New 911
                    <svg className='md:w-[2.5vw] w-[8vw]' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#000000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
