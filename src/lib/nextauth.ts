import { DefaultSession, getServerSession, NextAuthOptions } from "next-auth"
import { type GetServerSidePropsContext } from "next"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./db"
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/google'


declare module 'next-auth' {
    interface Session extends DefaultSession{
        user: {
            id: string;
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token }) => {
            const db_user = await prisma.user.findFirst({
                where: {
                    email: token?.email
                },

            })
            
            if (db_user) {
                token.id = db_user.id
            }
            return token
        },
        session: ({ session, token }) => {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        }
    },
    
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID!,
            clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    
        }),
        
    ]
};

export const getAuthSession = () => {
    return getServerSession(authOptions);
}