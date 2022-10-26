import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories';


function Feed() {
  return (
    <div className='flex-grow  pb-44 pt-6 mr-4 xl:mr-48 overflow-y-auto scrollbar-hide'>
        <div className='mx-auto max-w-md md:max-w-lg'>
            {/* Stories */}
            <Stories/>
             {/* input box */}
             <InputBox/>
              {/* posts */}
               <Posts/>
        </div>
    </div>
  )
}

export default Feed