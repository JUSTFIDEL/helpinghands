import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Helping Hands',
  description: 'Lets join hands and help each other',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <AuthProvider session={session}>
          <main className='relative  flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow flex-1 bg-[#eef5ffdc]'>{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
