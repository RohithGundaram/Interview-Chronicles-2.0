
'use client'
import Image from 'next/image'
import {useSession,signOut} from 'next-auth/react'
import Link from 'next/link'
export default function Home() {
  const {data:session}=useSession()
  return (
    <div>

      <div className='font-extrabold text-2xl tracking-wide'>

      Welcome {session?.user.name}
      <Link href="/experiences"></Link>
      </div>
      
    </div>
  )
}
