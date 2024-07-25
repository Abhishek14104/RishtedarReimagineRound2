import React from 'react';
import TextReveal from './TextReveal';

const JourneyToPerfection = () => {
    return (
        <div className="flex flex-col items-center text-center md:mt-[150px] md:mb-[50px] my-[100px]">
            <h1 className="md:text-[5.5vw] text-[15vw] font-bold mb-10">
                <TextReveal stagger={0.1}>
                    JOURNEY TO PERFECTION
                </TextReveal>
            </h1>
            <div className="flex flex-col md:flex-row justify-around md:text-base text-sm w-full md:w-[90vw] uppercase font-semibold">
                <div className="mb-8 mx-7 text-left md:text-center md:mb-0 md:mx-2">
                    <span className="md:text-[2vw] text-[8vw] leading-3">
                        <TextReveal stagger={0}>
                            PASSION
                        </TextReveal>
                    </span>
                    &nbsp;
                    <span>
                        <TextReveal stagger={0.01}>
                            At the heart of our company lies a passion for cars and driving. Every Porsche is the result of boundless attention to detail and a desire to create something extraordinary.
                        </TextReveal>
                    </span>
                </div>
                <div className="mb-8 mx-7 text-left md:text-center md:mb-0 md:mx-2">
                    <span className="md:text-[2vw] text-[8vw] leading-3">
                        <TextReveal stagger={0}>
                            INNOVATION
                        </TextReveal>
                    </span>
                    &nbsp;
                    <span>
                        <TextReveal stagger={0.01}>
                            We continually explore new technologies and ideas to raise standards and shape the future of the automotive industry. Lorem ipsum dolor sit amet.
                        </TextReveal>
                    </span>
                </div>
                <div className="md:mx-2 mx-7 text-left md:text-center">
                    <span className="md:text-[2vw] text-[8vw] leading-3">
                        <TextReveal stagger={0}>
                            COMMITMENT
                        </TextReveal>
                    </span>
                    &nbsp;
                    <span>
                        <TextReveal stagger={0.01}>
                            Every Porsche is the result of meticulous work and dedication from our team, ensuring that every driver experiences a premium driving experience.
                        </TextReveal>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default JourneyToPerfection;
