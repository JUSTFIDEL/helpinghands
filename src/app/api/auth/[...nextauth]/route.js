import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import User from '@/app/models/user'
import { connectedToDB } from '../../../../../utils/database'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session
    },

    async signIn({ account, profile, user, credentials }) {
      try {
        await connectedToDB()
        const checkEmail = await User.findAll({ email: user.email })

        if (checkEmail.length == 0) {
          await User.insertMany({ name: user.name, email: user.email })
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
})

export { handler as GET, handler as POST }

// http://localhost:3000/api/auth/callback/google
