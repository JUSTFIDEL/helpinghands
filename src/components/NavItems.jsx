'use client'

import Link from 'next/link'
import { useState } from 'react'
import { buttonVariants } from './ui/button'

const user = true

// const links = [
//   {
//     title: 'Dashboard',
//     path: '/',
//   },
//   {
//     title: 'About',
//     path: '/about',
//   },
//   {
//     title: 'Contact Us',
//     path: '/contact',
//   },
//   {
//     title: 'Register',
//     path: '/register',
//   },
//   {
//     title: 'Login',
//     path: '/login',
//   },
// ]

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <div className='flex gap-4 h-full items-center cursor-pointer'>
      {/* <Link className='navlinks' href='/dashboard'>
        Dashboard
      </Link>
      <Link className='navlinks' href='/about'>
        About
      </Link>
      <Link className='navlinks' href='/contact'>
        Contact Us
      </Link>
      <Link className='navlinks' href='/register'>
        Login/Register
      </Link> */}
    </div>
  )
}

export default NavItems
