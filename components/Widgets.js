import React from 'react';
import {VideoCameraIcon, SearchIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import Contact from './Contact';

function Widgets() {
    const contacts = [
        {  name:"   Elon Musk",
        src: "https://links.papareact.com/kxk"
         },
         {  name:"Jeff Bezoz",
         src: "https://links.papareact.com/f0p"
          },
          {  name:"Alphonce Otieno",
          src: "https://links.papareact.com/l4v",
           },
           {  name:"Mark Zuckerberg",
           src: "https://links.papareact.com/snf"
            },
            {  name:"Bill Gates",
            src: "https://links.papareact.com/zvy"
             }

    ]
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts </h2>
            <div className='space-x-2 flex'>
                <VideoCameraIcon className='h-6'/>
                <SearchIcon className='h-6'/>
                <DotsHorizontalIcon className='h-6'/>
            </div>
        </div>
        {contacts.map((contact) => (
            <Contact 
            key={contact.name}
            image={contact.src}
            name={contact.name}
            />
        ))}
    </div>
  )
}

export default Widgets