import React from 'react'

export default function ModelCard({data}) {
  return (
    <div className='text-white w-full h-full relative rounded-lg overflow-hidden flex justify-center items-center cursor-pointer'>
        <img src={data.photo} className='absolute w-full h-full object-cover brightness-50 hover:scale-110 transition-all' />
        <img src={data.sign} className='z-10 relative invert w-[90%] h-[40px]' />
        <p className='absolute bottom-3 text-sm opacity-70 text-center'>{data.desc}</p>
    </div>
  )
}
