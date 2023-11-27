/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    NEXT_PUBLIC_API_BASE_URL:process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
  },
  images : {
    domains: ['wooyano.s3.ap-northeast-2.amazonaws.com',
  'cdn.pixabay.com',
  ],
  },
};

module.exports = nextConfig