import React from 'react'
import Image from "next/image"
import {useSession } from "next-auth/react"
import { EmojiHappyIcon} from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"
import { useRef} from "react"
import { db , storage} from '../firebase';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'; 
import {useState} from 'react'
import { ref, getDownloadURL, uploadString } from 'firebase/storage';


function InputBox() {
    const {data:session} = useSession();
    const [input, setInput] = useState("");
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null)


    const sendPost = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db,'posts'), {
            
            message: input,
            userName:session?.user?.name,
            userImage:session?.user?.image,
            timestamp:serverTimestamp(),
        });
// adds the image url to the post database table
        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        if(selectedFile){
            await uploadString(imageRef, selectedFile, "data_url").then(
                async() => {
                    const downloadURL = await getDownloadURL(imageRef);
                    await updateDoc(doc(db, 'posts', docRef.id), {
                        image: downloadURL
                    })
                }
            )
        }

        setInput("");
        setSelectedFile(null);
    };

    // add image to post function that trigger the input
    const addImageToPost = ( e ) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    // A function that removes the selected image
    const removeImage =  () => {
        setSelectedFile(null)
    }
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            
            <img
            className='rounded-full'
            src={session?.user?.image} alt={session?.user?.name}
            width={40}
            height={40}
            layout='fixed'
            />
            <form className='flex flex-1'>
                <input 
                className='rounded-full h-12 bg-gray-100 px-5 flex-grow focus:outline-none'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text' placeholder= {`what's on your mind: ${session?.user.name}`}/>
                <button 
                className='bg-green-300 rounded-xl p-1 ml-2 font-semibold animate-bounce '
                type='submit' onClick={sendPost}>Post</button>
            </form>
              {selectedFile && (
                <dv className="flex flex-col filter hover:brightness-10 transition duration-150 transform hover:scale-100 cursor-pointer"
                onClick={removeImage}
                >
                    <img className='h-10 object-contain'
                    src={selectedFile} alt=""
                    />
                    <p className='text-sm text-center text-red-500'>Remove</p>
                </dv>
            )}
        </div>
        <div className='flex justify-between p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon
                className='text-red-500 h-7'
                />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div onClick={() => filePickerRef.current.click() } className='inputIcon'>
            <CameraIcon
                className='text-green-400 h-7'
                />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                <input type="file"
                ref={filePickerRef} hidden
                onChange={addImageToPost}
                />
            </div>
            
            <div className='inputIcon'>
            <EmojiHappyIcon
                className='text-yellow-300 h-7'
                />
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>

        </div>
    </div>
  )
}
export default InputBox