'use client'

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isClose, setIsClose] = useState(true)
  const user = null

  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center justify-between relative'>
              {/* TODO: Mobile nav */}

              {/* Logo */}
              <div className=' flex lg:ml-0'>
                <Link href='/' className='flex flex-row'>
                  {/* <Image
                    alt='logo'
                    src='/images/hh1.png'
                    width={40}
                    height={40}
                    className='hidden sm:block rounded-full'
                  /> */}
                  <Image
                    alt='logo'
                    src='/images/hh2.png'
                    width={70}
                    height={30}
                    className='pl-2'
                    onClick={() =>
                      setIsOpen((isOpen) => {
                        !isOpen
                      })
                    }
                  />
                </Link>
              </div>

              {/* <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div> */}

              {/* hamburger menu */}
              <div className='sm:hidden absolute ml-auto flex flex-col justify-end right-0 transition-all'>
                {isOpen ? (
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <X />
                  </button>
                ) : (
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                  </button>
                )}
              </div>

              {/* Desktop  */}
              <div className='ml-auto flex items-center'>
                <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-end sm:space-x-6'>
                  {user ? null : (
                    <Link
                      href='/login'
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      Log In
                    </Link>
                  )}

                  {user ? null : (
                    <span className='h-6 w-px bg-gray-200' arai-hidden='true' />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href='/register'
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      Register
                    </Link>
                  )}

                  {user ? null : (
                    <span className='h-6 w-px bg-gray-200' arai-hidden='true' />
                  )}

                  {user ? null : (
                    <div className='flex lg:ml-6'>
                      <span
                        className='h-6 w-px bg-gray-200'
                        arai-hidden='true'
                      />
                    </div>
                  )}
                </div>
              </div>

              <div
                className='ml-auto flex items-center sm:hidden'
                onClick={() =>
                  setIsOpen((isOpen) => {
                    !isOpen
                  })
                }
              >
                <div
                  className={`flex flex-1 flex-col sm:hidden absolute bg-white w-full h-screen top-12 right-0 z-[60] transition ${
                    isOpen ? 'p-12 sm:p-0 block' : 'hidden'
                  }`}
                >
                  {user ? (
                    <Link
                      href='/'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Home
                    </Link>
                  ) : (
                    <Link
                      href='/login'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Log In
                    </Link>
                  )}

                  {user ? (
                    <Link
                      href='/dashboard'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Dashboard
                    </Link>
                  ) : null}

                  {user ? null : (
                    <Link
                      href='/register'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Register
                    </Link>
                  )}

                  {user ? (
                    <Link
                      href='/about'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      About
                    </Link>
                  ) : (
                    <Link
                      href='/about'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      About
                    </Link>
                  )}

                  {user ? (
                    <Link
                      href='/contact'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Contact Us
                    </Link>
                  ) : (
                    <Link
                      href='/contact'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Contact Us
                    </Link>
                  )}

                  {user ? (
                    <Link
                      href='/logout'
                      className={buttonVariants({ variant: 'ghost' })}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Logout
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
