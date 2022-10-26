// import React from 'react'
// import {getProviders, signIn as SignIntoProvider} from "next-auth/react"
// import Header from '../../components/Header';
// import Image from 'next/image'

// //Browser
// function SignIn({providers}) {
//   return (
//     <>
    

//     <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-39 px-14 text-center bg-white shadow-md rounded-2xl border-green-600 boder-[4px]">
//         <Image
//         src={"https://links.papareact.com/5me"} alt={"https://links.papareact.com/ocw"}
//         width={200}
//         height={200}
//         objectFit="contain"
//         />
      
//       <p className="font-xs italic">Welcome to green facebook </p>
//         <div className="mt-40">
//         {Object.values(providers).map((provider) => (
//             <div key={provider.id}>
//               <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id,  {callbackUrl:"/"})}>
//                 Sign in with {provider.name}
//               </button>
//             </div>
//           ))}
//         </div>      
//     </div>
   
//     </>
//   )
// }


// export default SignIn;
// //sever
// export async function getServerSideProps(){
//   const providers = await getProviders();
//   return {
//       props:{
//           providers
//       }
//   }
// }