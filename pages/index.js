
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { signIn, useSession } from 'next-auth/react'


export default function Home() {
  const {data: session} = useSession();
  return (
    <div >
      <Head>
        <title>Green facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
     
       <main className='flex'>
       {session ? (
        <>
        
         {/* sidebar */}
         <SideBar/>
         {/* feed */}
         <Feed/>
         {/* wigdet */}
        </>
        ):(
          <>
          <Widgets/>
          </>
         
        )}
        
        
       </main>
    </div>
  )
  
}
