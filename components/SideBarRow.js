import React from 'react';
import Image from 'next/image';

function SideBarRow({Icon, title, src}) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {
        <img
        className='rounded-full'
        src={src}
        alt={''}
        width={30}
        height={30}
        layout="fill"
        />
      }
        {
            Icon && (
                <Icon className="h-8 text-green-500 "/>
            )
        }
        <p className='hidden sm:inline-flex font-medium'>{title} </p>
    </div>
  )
}

export default SideBarRow