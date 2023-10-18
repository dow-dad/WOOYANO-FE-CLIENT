import Link from 'next/link';
import React from 'react';

function Main() {
  return (
  <div className='text-center'>
    <div className='flex justify-center mx-auto my-[100px] items-center border-2 border-black text-2xl w-[200px] h-[150px]'>
      <p>
        WOOYANO
      </p>
    </div>

      <div className='flex flex-col pt-10 gap-3'>
        <button className='border-none bg-gray-300 text-black w-[300px] mx-auto h-[60px] rounded-lg pl-3'><Link href = "/login">
          업체 로그인
        </Link>
        </button>
        <button className='border-none bg-gray-300 text-black w-[300px] mx-auto h-[60px] rounded-lg pl-3'><Link href = "/signup/basicform">
          입점 신청
        </Link>
        </button>
      </div>

  </div>
  );
}

export default Main;
