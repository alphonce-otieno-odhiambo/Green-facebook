import React from 'react';
import Image from 'next/image';
import {
    ChatIcon,
    BellIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    ChevronDoubleDownIcon,

} from '@heroicons/react/solid';

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';

import {  signIn, signOut, useSession} from "next-auth/react"

function Header() {
    const {data: session} = useSession();

    console.log(session)
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        {/* left */}
        <div className='flex items-center'>
        <Image
        src='https://links.papareact.com/5me' alt=''
        layout='fixed'
        height={40}
        width={40}
        />
        
        <div className='flex ml-2 rounded-full p-2 bg-gray-200'>
        <SearchIcon className='h-6 text-gray-600'/>
        <input className='bg-transparent ml-2 outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex' 
        type='text' placeholder='search'/>
        </div>
        </div>
        {session ? (
          <>
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>                
                </div>
            </div>
            <div className='flex items-center sm:space-x-2 justify-end'>
            {/* Profile image */}
           
              <img 
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session?.user?.image} alt={session?.user?.name}
                width={40}
                height={40}
                layout="fixed"
              />
      
       <p className='font-semibold pr-3 whitespace-nowrap underline'>{session?.user?.name} </p>
            <ViewGridIcon className='icon'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDoubleDownIcon className='icon'/>
            </div>
           
          </>
        ):(
          <>
            <button className='underline font-semibold ' onClick={signIn}>SignIn to view the page</button>
          </>
        )}
           
            
      
        {/* center */}
        
        {/* right  */}
        
    </div>
  )
}

export default Header