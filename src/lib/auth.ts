import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import { getServerSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import config from '@/config'

export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const API_URL = config.API_URL
        const res = await fetch(API_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
        const { user } = await res.json()

        if (res.ok && user) {
          return {
            ...user,
            image: user.avatar,
          }
        }
        return null
      },
    }),
  ],

  pages: {
    signIn: '/login',
    signOut: '/login',
    verifyRequest: '/login', // (used for check email message)
    newUser: '/dashboard', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
}

// export function serverAuth(
//   ...args:
//     | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
//     | [NextApiRequest, NextApiResponse]
//     | []
// ) {
//   return getServerSession(...args, authOptions)
// }
