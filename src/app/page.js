'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'

import {
  Menu,
  ArrowDownToLine,
  CheckCircle,
  Leaf,
  Lightbulb,
  SunMedium,
  Target,
} from 'lucide-react'

import Link from 'next/link'
import Register from './register/page'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from './register/form'

//
export default function Home() {
  const user = null

  const { data: session, status } = useSession()
  const router = useRouter()

  if (session) {
    router.replace('/dashboard')
    return null
  }

  return (
    <>
      <MaxWidthWrapper>
        <div className='relative mx-auto max-w-5xl items-center'>
          {/* mobile */}
          <div className='sm:hidden'>
            <div className='sm:hidden relative w-full h-[40vh]'>
              <Image
                src='/images/hero2.jpg'
                fill
                alt='hero'
                className='absolute'
              />
              <div className='text-center absolute px-4 sm:hidden z-10 m-auto top-0 left-0 bottom-0 right-0 flex items-center'>
                <h1 className='text-4xl font-bold tracking-tight text-amber-400 m-auto'>
                  Your best market to invest and make{' '}
                  <span className='text-[40px] text-blue-600'>MONEY</span> while
                  asleep.
                </h1>
              </div>
            </div>
          </div>
          <div className='sm:hidden'>
            <p className='mt-6 text-base text-muted-foreground text-center'>
              Welcome to Helping-Hands Investment. Where every member is
              verified and ready to help each other by combining our resources
              to create a larger capital for a larger interest for all members.
            </p>
            <div className='flex flex-col gap-4 mt-6'>
              <Link href='/register' className={buttonVariants()}>
                Register Now &rarr;
              </Link>
              <Button variant={'outline'} className='text-blue-600 px-4'>
                <Link href='/login'>Sign In &rarr;</Link>
              </Button>
              <Button
                variant={'outline'}
                className='text-blue-600 px-4'
                onClick={() => {
                  signIn('google')
                }}
              >
                <FcGoogle /> <span className='ml-2'>Login with Google</span>
              </Button>
            </div>
          </div>

          {/* desktop */}
          <div className='hidden sm:flex'>
            <div className='sm:flex flex-1 flex-col text-center sm:text-left absolute top-20 pl-10 z-10'>
              <h1 className='font-bold tracking-tight text-6xl max-w-[45vw] text-amber-500'>
                Your best market to invest and make{' '}
                <span className='text-blue-600'>MONEY</span> while asleep.
              </h1>
              <p className='mt-6 text-base text-muted-foreground max-w-[35vw]'>
                Welcome to Helping-Hands Investment. Where every member is
                verified and ready to help each other by combining our resources
                to create a larger capital for a larger interest for all
                members.
              </p>

              <div className='flex-row gap-6 mt-6 '>
                <Link href='#register' className={buttonVariants()}>
                  Register Now &rarr;
                </Link>
                <Button variant={'outline'} className='text-blue-600 px-4 mx-6'>
                  <Link href='/login'>Sign In &rarr;</Link>
                </Button>
                <Button
                  variant={'outline'}
                  className='text-blue-600 px-4'
                  onClick={() => {
                    signIn('google')
                  }}
                >
                  <FcGoogle /> <span className='ml-2'>Login with Google</span>
                </Button>
              </div>
            </div>

            <div className='hidden sm:block clip-img relative h-[80vh] w-[45vw] -right-[45%]'>
              <Image
                src='/images/hero2.jpg'
                fill
                alt='hero'
                className='absolute mr-auto'
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <MaxWidthWrapper>
        <div className='relative'>
          <div className='py-10 sm:py-12 mx-auto max-w-4xl items-center absolute top-2'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col gap-10'>
                <div className='flex-1 text-center md:text-left'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 md:text-6xl'>
                    Your best market to invest and make{' '}
                    <span className='text-blue-600'>MONEY</span> while asleep.
                  </h1>
                  <p className='mt-6 text-base max-w-prose text-muted-foreground'>
                    Welcome to Helping-Hands Investment. Where every member is
                    verified and ready to help each other by combining our
                    resources to create a larger capital for a larger interest
                    for all members.
                  </p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mt-6 sm:self-start'>
                  <Link href='/register' className={buttonVariants()}>
                    Register Now &rarr;
                  </Link>
                  <Button variant={'outline'} className='text-blue-600 px-4'>
                    <Link href='/login'>Sign In &rarr;</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper> */}

      {/* <section className='border-t border-gray-200 bg-gray-100'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <Link
                href={perk.link}
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center bg-[#7ccbe4] p-4 rounded-lg'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-[#32b6f3] text-blue-600'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-bold text-gray-800'>
                    {perk.name}
                  </h3>
                  <span className='mt-2 text-sm font-bold text-blue-600'>
                    {perk.duration}
                  </span>
                  <p className='text-sm font-semibold text-gray-600'>
                    {perk.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section> */}

      <section
        className='border-t border-gray-200 bg-gray-100 mt-8'
        id='register'
      >
        <MaxWidthWrapper className='py-2'>
          <Form />
        </MaxWidthWrapper>
      </section>
    </>
  )
}
