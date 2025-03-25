"use server"
import { isSessionHave } from '@/actions/loginAction'
import { auth } from '@/auth'
import SignInButton from '@/components/SignInButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NextResponse } from 'next/server'
import React from 'react'

async function page() {

    const session = await isSessionHave();

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-[#f5fff9]'>
        

        <Card>
          <CardHeader className='w-100'>
            <CardTitle className='flex text-lg'>Log in with</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <SignInButton provider='google'/>
            <SignInButton provider='github' />
          </CardContent>
        </Card>
    </div>
  )
}

export default page