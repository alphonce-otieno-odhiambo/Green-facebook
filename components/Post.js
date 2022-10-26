import React, { useState, useEffect } from 'react'
import {ShareIcon, ThumbUpIcon, ChatIcon  } from "@heroicons/react/outline"
import { ThumbUpIcon as ThumUpIconFilled } from '@heroicons/react/solid';
import Image from 'next/image'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import {useSession} from 'next-auth/react';

function Post({id, message, userImage, timestamp, name, postImage}) {
    // const [likes, setLikes] = useState([]);
    // const [hasLiked, setHasLiked] = useState(false)
    // const {data: session } = useSession();

    // // building the liking fuctionality
    // const likePost = async () => {
    //     // if(hasLiked){
    //     //     await deleteDoc(doc(db, 'posts', id, 'like', session?.user.uid))
    //     // }else {
    //         await setDoc(doc(db, 'posts', id, 'likes', session?.user.uid), {
    //             userName: session?.user?.name,
    //            })     
    // };
    // // retrieving the likes from data base
    // useEffect(() => {
    //     const unsubscribe = onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => setLikes(snapshot.docs))
    // }, [db])

    // useEffect(() => {
    //     setHasLiked(likes.findIndex((like) => like.id === session.user.uid) !== -1)
    // }, [likes])
  return (
    <div className='flex flex-col'>
       <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
            <div className='flex space-x-2'>
                <img 
                className='rounded-full'
                src={userImage} width={40} heigt={40}  alt=""/>
                <div>
                <p className='font-medium' >{name} </p>
                 <p className='text-xs text-gray-400'>
                {new Date(timestamp?.toDate()).toLocaleString()} </p>
                </div>
            </div>
            <p className='pt-4'>{message} </p>
       </div>
       {postImage && (
        <div className='relative h-56 md:h-96 bg-white'>
            <img src={postImage} alt=''
            objectFit='cover' 
            layout='fill'
            />
        </div>
       )}
       <div className='flex justify-btn rounded-b-2xl items-center shadow-md text-gray-400 border-t'>
        <div className='inputIcon'>
            <ShareIcon 
            
            className='h-4 rounded-bl-2xl'/>
            <p className='text-xs sm:text-base'> Share</p>
        </div>
        <div className='inputIcon rounded-none'>
            <ChatIcon className='h-4'/>
            <p className='text-xs sm:text-base'> comment</p>
        </div>
        <div className='inputIcon'>
        <ThumUpIconFilled  className='h-4 text-blue-800'/>
        <p className='text-xs sm:text-base rounded-br-2xl'> like</p>
{/*         
            {hasLiked ? (
                <>
                     <ThumUpIconFilled onClick={likePost} className='h-4 text-blue-800'/>
                </>
                
                // <p className='text-xs sm:text-base rounded-br-2xl'> like</p>

            ) : (
                <>
                <ThumbUpIcon onClick={likePost} className='h-4'/>
                </>
            //     
            // <p className='text-xs sm:text-base rounded-br-2xl'> like</p>
            

            )}
            {
                likes.length > 0 && (
                    <span>{likes.length} </span>
                )
            }
           */}
        </div>
       </div>
    </div>
  )
}

export default Post