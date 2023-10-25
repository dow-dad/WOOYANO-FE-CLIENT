import HeaderLogo from '@/components/headerlogo/headerLogo';
import Link from 'next/link';
import React from 'react';

function Main() {
  return (
  <div className='text-center'>
    <div className='mt-[100px]'>
    <HeaderLogo/>
    </div>

      <div className='flex flex-col pt-10 gap-3'>
        <button className='border-none bg-gray-300 text-black w-[300px] mx-auto h-[60px] rounded-lg pl-3'><Link href = "/login">
          업체 로그인
        </Link>
        </button>
        <button className='border-none bg-gray-300 text-black w-[300px] mx-auto h-[60px] rounded-lg pl-3'><Link href = "/signup/cert">
          입점 신청
        </Link>
        </button>
      </div>

  </div>
  );
}

export default Main;
