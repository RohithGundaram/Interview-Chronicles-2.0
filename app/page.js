
'use client'
import Image from 'next/image'
import {useSession,signOut} from 'next-auth/react'
export default function Home() {
  const {data:session}=useSession()
  return (
    <div>
      Welcome {session?.user.name}
      <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  )
}
