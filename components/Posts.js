import React from 'react'
import Post from './Post'
import { orderBy, query, onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect} from "react"
import { db } from '../firebase';

function Posts() {
    const [posts, setPosts] = useState([]);
    // console.log(post.data())
    //functopn retrieving the data from database
    const getPost = async () => {
        const collectionRef = await collection(db, 'posts');
        const q = await query(collectionRef, orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                ...doc.data(), id:doc.id
            })))     
            return unsubscribe;       
        })
    } 

    useEffect(( ) => {
        getPost()
    }, [])
    console.log(posts)
  return (
    <div>
        {posts.map((post) => (
            <Post
            key={post.id}
            message = {post.message}
            id = {post.id}
            userImage = {post.userImage}
            timestamp = {post.timestamp}
            name = {post.userName}
            postImage = {post.image}
            />
        ))}
        
    </div>
  )
}

export default Posts