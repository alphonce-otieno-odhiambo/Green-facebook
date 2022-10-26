// import { useSession } from 'next-auth/react';
import React from 'react';
// import { useSession } from "react-auth/client"
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    
    UsersIcon
} from "@heroicons/react/solid"
import SideBarRow from './SideBarRow';
import { useSession} from "next-auth/react"

function SideBar() {
    const {data : session} = useSession();
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SideBarRow src={session?.user?.image} title={session?.user?.name}/>
        <SideBarRow Icon={UsersIcon} title="Friends" />
        <SideBarRow Icon={UserGroupIcon} title="Groups" />
        <SideBarRow Icon={ShoppingBagIcon} title="Marketplace" />
        <SideBarRow Icon={DesktopComputerIcon} title="watch" />
        <SideBarRow Icon={CalendarIcon} title="Events" />
        <SideBarRow Icon={ClockIcon} title="Memories" />
        <SideBarRow Icon={ChevronDownIcon} title="Friends" />
        
    </div>
  )
}

export default SideBar