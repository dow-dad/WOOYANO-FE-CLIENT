import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "LoginId", type: "text", placeholder: "Wooyano" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {  
          if (!credentials?.email || !credentials?.password) return null;
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "email" : `${credentials?.email}`,
              "password" : `${credentials?.password}`,
            }), 
          })
          const user = await res.json();
          if (res.ok && user) {
            return user
          } else {
            return null;
          }
        },
      }),

  ],
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },

//     async session({ session, token }) {
//       session.user = token;
//       return session;
//     },

//     async redirect({ url, baseUrl }) {
//       if (url.startsWith("/")) return `${baseUrl}${url}`;
//       else if (new URL(url).origin === baseUrl) return url;
//       return baseUrl;
//     },
//   },
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions)
