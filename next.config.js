/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    NEXT_PUBLIC_API_BASE_URL:process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
  },
  images : {
    domains:
     []
  }
}

module.exports = nextConfig
