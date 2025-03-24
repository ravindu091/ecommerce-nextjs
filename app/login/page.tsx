import { auth } from '@/auth'
import SignInButton from '@/components/SignInButton'
import React from 'react'

async function page() {

    const session = await auth()
    if(session){

    }
  return (
    <div>login page
        <SignInButton />
    </div>
  )
}

export default page