'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

function ResultTem() {
  const router=useRouter();
  return (
    <div className='flex flex-col leading-10 items-center'>

      <p className='text-center text-2xl my-10'>
        입점 신청
      </p>

      <div className='text-center mt-10'>
        입점 신청이 완료되었습니다. <br/>
        (승인 신청은 영업일 기준 최대 7일이 소요되며, <br/>
        상황에 따라 시간이 더 소요될 수 있습니다.) <br/>
        입점 신청 결과는 이메일로 발송됩니다.
      </div>

      <div className='min-w-[300px]'>
      <button className='mt-[100px] border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg ' onClick={()=>router.push("/")}>
        홈으로 가기
      </button>
      </div>

    </div>
  )
}

export default ResultTem