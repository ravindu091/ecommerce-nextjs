
import Link from 'next/link'
import React from 'react'
import UserButton from '../UserButton'

const NavBar = ({page}:{page:string}) => {
  return (
    <div className='py-3 xl:px-10 flex flex-row justify-between items-center'>
      <div>
        <h1 className='text-2xl font-bold'>LOGO</h1>
      </div>
      <div className='flex gap-2'>
        <Link href='/' className='nav-link' >Home</Link>
        <Link href='/shop' >Shop</Link>
        <Link href='/blog' >Blog</Link>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default NavBar