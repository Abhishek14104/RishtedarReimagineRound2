import React from 'react'
import videoBg from '../assets/Experience/Porsche-bg.mp4';
import TextReveal from '../components/TextReveal';
import Button from '../components/Button';

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
                <Button text={"Discover the new 911"} />
            </div>
        </div>
    )
}
