import React from 'react';
import Image from 'next/image';

function Contact({image, name}) {
  return (
    <div className='flex items-center space-x-2 relative  cursor-pointer rounded-xl space-y-4'>
        <img
        className='rounded-full'
        src={image}
        alt=''
        width={50}
        height={40}
        objectFit='cover'
        layout="fill"
        />
        <p className='hover:bg-gray-200 cursor-pointer p-2 rounded-md'>{name} </p>
        <div 
        className='absolute bottom-2  left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce'
        />
    </div>
  )
}

export default Contact