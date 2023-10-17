'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

function HomeHeader() {
  const router=useRouter();

  return (
    <div className='flex row justify-between'>
      <div className = 'w-3 pt-4 ml-2' onClick={()=>router.back()}>
        <Image
        src={'/images/button/back2.png'}
        alt={'뒤로가기'}
        width={1000}
        height={1000}
        />
      </div>

      <div className = 'w-3 pt-4 ml-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none'>
          <path d="M4 5H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12L20 12" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 19H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

export default HomeHeader