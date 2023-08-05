'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {useSession,signIn,signOut} from 'next-auth/react'
import {useRouter} from 'next/navigation'

const page = () => {
    const {data:session}=useSession()
    const router=useRouter()
    const handleClick=()=>{
        signIn()
        
    }
    
  return (
    <div>
        {session&&(
            <div>

            <div>Welcome {session.user.name}</div>
            <Image src={session.user.image}  width={500}
      height={500}/>
            <div><Link href='/'>Go To Home Page</Link></div>
            <div><button onClick={()=>signOut()}>Sign Out</button></div>
            </div>
        )}
        {!session &&(
            <div>

            <div>Press the following button to sign in</div>
            <button onClick={handleClick}>Sign In</button>
            </div>

        )

        }
    </div>
  )
}

export default page