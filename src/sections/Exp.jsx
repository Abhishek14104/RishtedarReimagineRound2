import React from 'react'
import videoBg from '../assets/Experience/Porsche-bg.mp4';
import TextReveal from '../components/TextReveal';

export default function Exp() {
    return (
        <div className='w-full flex flex-row justify-evenly'>
            <video className='w-[30vw] h-[90vh] rounded-2xl mt-[200px] object-cover' autoPlay loop muted id='video'>
                <source src={videoBg} type='video/mp4'></source>
            </video>
            <div className='w-[50vw] text-[45px] leading-none flex flex-col gap-10'>
                <TextReveal stagger={0.01} leading='leading-tight'>
                    Anyone who dreams of a Porsche usually has one image in their mind: the 911 has been the epitome of an exciting, powerful sports car with day-to-day usability for 60 years. Take a seat behind the wheel of the new 911 and become part of a unique community.
                    The new T-Hybrid technology was derived from motorsport and combines emotive engine sound with outstanding performance.
                </TextReveal>
                <div className='border-black font-semibold border-[3px] rounded-md text-[1.4vw] py-3 px-5 w-fit'>
                    Discover The New 911
                </div>
            </div>
        </div>
    )
}
