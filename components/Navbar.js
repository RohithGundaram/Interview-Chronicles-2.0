import React from 'react'
import { useSession,signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Paper, Tooltip } from '@mui/material'

const Navbar = () => {
    const {data:session}=useSession()
    console.log(session)
  return (
    <div className='text-white bg-black py-4 px-8 flex items-center justify-between'>
        <div className='font-bold text-2xl tracking-wider'>
            <Link href='/'>Interview Chronicles</Link>
        </div>
        <div className='flex items-center space-x-6'>
            <div>Users</div>
            <div>Experiences</div>
            {/* <div>{session?.user.name}</div> */}
            <div ><Tooltip title={session?.user.name}><Image className='rounded-full border border-2 border-white' src={session?.user.image} height={40} width={40}/></Tooltip></div>
            <Link  href="/post"><Paper elevation={24}  className='p-3 text-sm  font-bold'>New Post +</Paper></Link>
            <button className='bg-blue-600 rounded-xl font-bold  text-sm' onClick={()=>signOut()}><Paper elevation={24} className="p-3 bg-red-500 text-white">Sign Out</Paper></button>
        </div>
    </div>
  )
}

export default Navbar