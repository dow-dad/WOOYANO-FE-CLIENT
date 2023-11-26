import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

    interface Session {
        user: {
            token: string,
            email: string,
            serviceIdList : any
        } & DefaultSession["user"]
    }
}